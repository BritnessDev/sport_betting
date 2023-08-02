import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom'

const EmptyLayout = () => {
    
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/teams-by-sportid')
    },[])
    
    return (
            <Layout>
                <div>

                </div>
            </Layout>
    )
}

export default EmptyLayout
