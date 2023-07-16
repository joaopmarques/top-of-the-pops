import { time } from 'console';
import Image from 'next/image';

export default function SongList({ data, liveData }: { data: any, liveData: boolean }) {
  return (
    <>
    <ul className="bg-gradient-to-tr from-teal-50 via-sky-50 to-violet-50 bg-gradient-opacity-20 p-2 rounded-3xl">
      {data?.chart_items.map((track: any, index: number) => (
        <li className="relative flex items-center p-3 md:p-5 m-6 md:m-8 rounded-2xl bg-white border-2 border-teal-100 text-slate-600" key={track.item.id}>
          <span className="absolute flex justify-center items-center h-7 w-7 bg-yellow-300 rounded-3xl text-slate-600 -top-2 -left-2 text-sm font-bold mr-4">{index + 1}</span>
          <Image
            src={track.item.song_art_image_thumbnail_url}
            alt={track.item.title}
            width={74}
            height={74}
            className="mr-4 rounded-md"
            />
          <div>
            <p className="text-md lg:text-xl font-light">{track.item.title}</p>
            <a
              className="block text-indigo-500 hover:text-indigo-400 text-md mt-1"
              href={track.item.primary_artist.url}
              target="_blank"
              >
              {track.item.primary_artist.name}
            </a>
          </div>
        </li>
      ))}
    </ul>
    {liveData ? <span className="text-xs text-slate-300 mt-3">Data updated {new Date().toLocaleTimeString('en-US')}</span> : <span className="text-xs text-slate-300 mt-3">Data archived from 2023-05-15</span>}
    </>
  )
}