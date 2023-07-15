import archivedData from '@/app/api/demo-request.json'
import SongList from '@/app/components/SongList'

export default async function TopList({ liveData }: { liveData?: boolean }) {
  let data: any = {}

  if (liveData) {
    const options = {
      next: {
        revalidate: 86400, // cache for 24 hours
      },
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY || "",
        'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST || "",
      },
    };
  
    const url = process.env.NEXT_PUBLIC_API_URL || "";
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      data = result;
    } catch (error) {
      console.error(error);
    }
  } else {
    data = archivedData
  }

  return <SongList data={data} liveData={liveData} />
}