import React from 'react';
import { Layout } from '../components';
import { gql, useQuery } from "@apollo/client"
import TrackCard from "../containers/track-card"
import QueryResult from '../components/query-result';

const Tracks = () => {

    const TRACKS = gql`
        query getTracks {
            tracksForHome {
                id
                title
                thumbnail
                length
                modulesCount
                author {
                    id
                    name
                    photo
                }
            }
        }
    `
    const { loading, err, data } = useQuery(TRACKS)

    if (loading) return "Loading..."

    else if(err) return `ERROR! ${err.message}`
    
    else {
        return (
            <Layout grid>
                <QueryResult
                    error={err}
                    loading={loading}
                    data={data}
                >
                    {data?.tracksForHome?.map((track) => <TrackCard key={track.id} track={track} />)}
                </QueryResult>
            </Layout>
        )
    }
};

export default Tracks;
