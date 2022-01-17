const { gql } = require('apollo-server')

const typeDefs = gql`
    
    type Query{
        "Query to get tracks array for the homepage grid"
        tracksForHome: [Track!]!
    }
    
    "A track is a group of modules that teachesr about a specific topic"
    type Track{
        id: ID!
        "the tracks title"
        title: String!
        "the author of the track"
        author: Author!
        "thumbnail of the track"
        thumbnail: String
        "the tracks approxiamte time required to complete"
        length: Int
        "the number of tracks, the module contains"
        modulesCount: Int
    }

    "Author of the complete track"
    type Author{
        id: ID!
        "name of the author"
        name: String!
        "authors profile of the author"
        photo: String
    }
`

module.exports = typeDefs