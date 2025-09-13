import React, { useEffect, useRef } from 'react'

export default function FAFullTimeEmbed({ lrcode = '865089825', width = 350 }) {
    const containerRef = useRef(null)

    useEffect(() => {
        const scriptId = 'fa-fulltime-script'
        const existingScript = document.getElementById(scriptId)

        if (!existingScript) {
            const script = document.createElement('script')
            script.src = 'https://fulltime-league.thefa.com/client/api/cs1.js?v=2'
            script.id = scriptId
            script.async = true
            document.body.appendChild(script)
        }
    }, [])

    return (
        <div className="bg-neutral-900 text-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">FA Full-Time Division Table</h2>
            <div
                id={`rep${lrcode}`}
                ref={containerRef}
                style={{ width: `${width}px` }}
            >
                Data loading...{' '}
                <a
                    href={`https://fulltime-league.thefa.com/index.html?league=717763850&division=${lrcode}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 underline"
                >
                    Division 1
                </a>{' '}
                |{' '}
                <a
                    href="https://fulltime-league.thefa.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 underline"
                >
                    FULL-TIME Home
                </a>
            </div>
        </div>
    )
}