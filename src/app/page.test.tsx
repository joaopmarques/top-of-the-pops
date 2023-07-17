import archivedData from '@/app/api/demo-request.json'
import { getData } from '@/app/components/TopList'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(archivedData),
  }),
)

beforeEach(() => {
  fetch.mockClear()
})

describe('TopList -> data fetching functions', () => {
  it('should return archival data', async () => {
    const data = await getData(false)

    expect(data).toEqual(archivedData)
  })

  it('should fetch local data but return it', async () => {
    const data = await getData(true)

    expect(data).toEqual(archivedData)
    expect(fetch).toHaveBeenCalledTimes(1)
  })

  it('should return an error if the fetch fails', async () => {
    fetch.mockImplementationOnce(() => Promise.reject('API failure'))

    const data = await getData(true)

    expect(data).toEqual(undefined)
    expect(fetch).toHaveBeenCalledWith(process.env.API_URL ?? '', {
      next: {
        revalidate: 86400, // cache for 24 hours
      },
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.API_KEY ?? '',
        'X-RapidAPI-Host': process.env.API_HOST ?? '',
      },
    })
  })
})
