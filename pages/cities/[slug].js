import { useRouter } from 'next/router'

const City = () => {
    const router = useRouter()
    const { slug } = router.query

    return (
        <div>
            Page for {slug}
        </div>
    )
}

export default City