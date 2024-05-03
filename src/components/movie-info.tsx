import { API_URL } from "../app/(home)/page";

async function getMovie(id:string) {
  // const response = await fetch(API_URL + `/${id}`);
  // return response.json();
  throw new Error("Something is wrong");
}

export default async function MovieInfo({id} : {id: string}) {
  const movie = await getMovie(id);
  return (
    <div>{JSON.stringify(movie)}</div>
  );
}