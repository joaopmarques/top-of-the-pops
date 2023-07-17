import archivedData from '@/app/api/demo-request.json'
import SongList from '@/app/components/SongList'

async function getData(liveData: boolean) {
  if (liveData) {
    const options = {
      next: {
        revalidate: 86400, // cache for 24 hours
      },
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.API_KEY ?? '',
        'X-RapidAPI-Host': process.env.API_HOST ?? '',
      },
    }

    const url = process.env.API_URL ?? ''

    try {
      const response = await fetch(url, options)
      const result = await response.json()
      return result
    } catch (error) {
      console.error(error)
    }
  } else {
    return archivedData
  }
}

async function TopList({ liveData }: { liveData: boolean }) {
  const data = await getData(liveData)

  return <SongList data={data} liveData={liveData} />
}

export default TopList
export { getData }
