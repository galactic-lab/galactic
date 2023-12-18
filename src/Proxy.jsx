import { decodeXor, encodeXor, formatSearch } from '/public/tools.js'
import { useNavigate } from 'react-router-dom/dist'
import Frame from '../components/Frame'
import { useEffect, useState, useRef } from 'react'
function Proxy() {
    const [urlInput, setUrlInput] = useState('')
    const params = useQuery()
    const navigate = useNavigate()
    const [hidden, setHidden] = useState(false)
    const frameRef = useRef<HTMLIFrameElement>(null)
    const proxy = store('proxy') || 'uv'

    const src = params.get('src') || ''

    useEffect(() => {
        if (!src) navigate('/')
    })

    function handleLoad() {
        // console.log(frameRef.current.contentWindow)
        if (`__${proxy}$location` in frameRef.current.contentWindow) {
            const url = new URL(frameRef.current.contentWindow[`__${proxy}$location`].href)
            setUrlInput(url.toString())
            } else {console.error('no location')}
        return (
            <>
                <Frame src={formatSearch(decodeXor(src))} handleLoad={handleLoad} frameRef={frameRef} />

            </>
        )
        }}

export default Proxy