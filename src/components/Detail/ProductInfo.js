import React, { useCallback, useEffect, useRef, useState } from 'react'
import './css/ProductInfo.css'
import { BsThreeDots } from 'react-icons/bs'
import { RiAlarmWarningLine } from 'react-icons/ri'

export default function ProductInfo() {
  const reportRef = useRef()
  const [isShow, setIsShow] = useState(false)
  //id를 받아와 어떤 게시물을 신고할 것인지를 알아야할 것 같다.
  const onClickDots = () => {
    setIsShow(!isShow)
  }
  const onClickReport = () => {
    alert('로그인이 필요한 서비스입니다.')
    setIsShow(!isShow)
  }

  const Report = () => (
    <div className="reportIcon" onClick={onClickReport} ref={reportRef}>
      <RiAlarmWarningLine className="alarmIcon" size={24} />
      <span>신고하기</span>
    </div>
  )

  const handleCloseReport = useCallback(
    async (e) => {
      if (isShow && !reportRef.current.contains(e.target)) {
        setIsShow(false)
      }
    },
    [isShow]
  )

  useEffect(() => {
    window.addEventListener('click', handleCloseReport)
    return () => {
      window.removeEventListener('click', handleCloseReport)
    }
  }, [handleCloseReport])

  return (
    <div className="infoContainer">
      <div className="id">User ID</div>
      <div className="etc">
        <div className="date">2022-02-22</div>
        <div className="report" onClick={onClickDots}>
          <BsThreeDots size={24} />
          {isShow ? <Report /> : null}
        </div>
      </div>
    </div>
  )
}
