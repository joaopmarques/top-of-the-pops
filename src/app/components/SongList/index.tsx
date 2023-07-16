import Link from 'next/link';
import Image from 'next/image';

export default function SongList({ data, liveData }: { data: any, liveData?: boolean }) {
  return (
    <>
    <ul className="bg-gradient-to-tr from-teal-50 via-sky-50 to-violet-50 bg-gradient-opacity-20 p-2 md:p-3 lg-p-4 rounded-3xl">
      {data?.chart_items.map((track: any, index: number) => (
        <li className="relative flex items-center p-3 md:p-5 m-3 md:m-6 rounded-2xl bg-white shadow-3xl shadow-fuchsia-50 border border-violet-100 text-slate-600" key={track.item.id}>
          <span className="absolute flex justify-center items-center h-7 w-7 bg-yellow-200 rounded-3xl text-slate-600 -top-2 -left-2 text-sm font-bold mr-4">{index + 1}</span>
          <Image
            src={track.item.song_art_image_thumbnail_url}
            alt={track.item.title}
            width={256}
            height={256}
            className="mr-4 rounded-md w-[74px] h-[74px] md:w-[92px] md:h-[92px] lg:w-[128px] lg:h-[128px]"
            />
          <div>
            <p className="text-md lg:text-md font-medium">
              <a href={track.item.relationships_index_url} target="_blank" className="block hover:text-indigo-300">{track.item.title}</a>
            </p>
            <div className="flex items-end text-sm">
              <a
                className="text-indigo-400 hover:text-indigo-300 text-md mt-0.5 mr-2"
                href={track.item.primary_artist.url}
                target="_blank"
              >
                {track.item.primary_artist.name}
              </a>
              <span className="text-slate-300">{track.item.release_date_for_display}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
    {liveData
      ? <span className="text-xs text-slate-300 mt-3">
        Data updated {new Date().toLocaleTimeString('en-US')} <Link className="underline hover:text-indigo-300" href="/">See archived data</Link>
        </span>
      : <span className="text-xs text-slate-300 mt-3">
        Data archived from 2023-05-15. <Link className="underline hover:text-indigo-300" href="/live-data">See live data</Link>
        </span>
    }
    </>
  )
}