import { useEffect } from 'react'

interface AdSenseProps {
  adSlot: string
  adFormat?: 'auto' | 'rectangle' | 'horizontal' | 'vertical'
  className?: string
  style?: React.CSSProperties
}

function AdSense({ adSlot, adFormat = 'auto', className, style }: AdSenseProps) {
  useEffect(() => {
    try {
      // AdSenseスクリプトが読み込まれた後に広告を表示
      const adsbygoogle = (window as any).adsbygoogle || []
      adsbygoogle.push({})
    } catch (error) {
      console.error('AdSenseエラー:', error)
    }
  }, [adSlot])

  // 本番環境でのみ広告を表示（開発環境では非表示）
  const isDevelopment = typeof window !== 'undefined' && 
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  
  if (isDevelopment) {
    return (
      <div 
        className={`adsense-placeholder ${className || ''}`}
        style={{
          background: '#f0f0f0',
          border: '1px dashed #ccc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '200px',
          fontSize: '14px',
          color: '#666',
          ...style
        }}
      >
        📊 広告スペース ({adFormat})
      </div>
    )
  }

  return (
    <>
      <ins
          className={`adsbygoogle ${className || ''}`}
          style={{
            display: 'block',
            ...style
        }}
        data-ad-client="ca-pub-5434654641564206"  // 実際のクライアントIDに更新が必要
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
      <script>
       (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </>
  )
}

export default AdSense