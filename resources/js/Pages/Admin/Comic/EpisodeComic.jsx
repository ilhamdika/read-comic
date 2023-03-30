import React from 'react'
import { Head, Link, useForm } from '@inertiajs/react'
import PrimaryButton from '@/Components/PrimaryButton'
import Authenticated from '@/Layouts/Authenticated/Index'


export default function EpisodeComic ({auth, episodes, comic}){
    return(
        <Authenticated auth={auth}>
            <Head title="Episode Comic" />
            <h1 className="text-xl">Episode Comic</h1>
            <Link href={route('admin.dashboard.comic.index')}>
                <PrimaryButton className="bg-green-500 mb-4">
                    Back
                </PrimaryButton>
            </Link>
        <div>
             <Link href={route('admin.dashboard.episodes.create', comic.id)}>
                        <PrimaryButton className="bg-green-500 justify-end">
                            Add Episode
                        </PrimaryButton>
                    </Link>
             <table className="mt-10">
						<thead>
							<tr>
								<th>No</th>
								<th>Thumbail</th>
								<th>Episode</th>
								<th>Title</th>
                                
								<th>Action</th>
							</tr>
						</thead>
                        <tbody>
                            {episodes.map((episode, i=1) => (
                                <tr key={episode.id}>
                                    <td>{i+1}</td>
                                    <td><img className="w-32" src={`/storage/${episode.thumbnail}`} /></td>
                                    <td>{episode.episode}</td>
                                    <td>{episode.title}</td>
                                    <td>
                                        <Link href={route('admin.dashboard.episodes.edit', episode.id)}>
                                            <PrimaryButton className="bg-green-500">
                                                Edit
                                            </PrimaryButton>
                                        </Link>
                                      
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
        </div>
        </Authenticated>
    )
}