import React from 'react'
import Blogs from './Resources/Blogs'
import ResearchPublications from './Resources/ResearchPublications'
import Pressreleases from './Resources/Pressreleases'

const Resources = () => {
    return (
        <>
            <div className='header-title text-center my-4 mx-2  p-4 bg-light rounded'>
                <h2 className='text-dark'>Resources</h2>
            </div>
            <div className='container'>
                <div className="row">
                    <div className="col-md-4">
                        <Blogs />
                    </div>
                    <div className="col-md-8">
                        <Pressreleases />
                    </div>
                    <div className="col-md-12 mt-3">
                        <ResearchPublications />
                    </div>
                </div>
            </div>

        </>


    )
}

export default Resources