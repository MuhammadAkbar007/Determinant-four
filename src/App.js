import {useEffect, useState} from "react";
import './App.css'

function App() {

  const [disable, setDisable] = useState(true)
  const [res, setRes] = useState(false)
  const [result, setResult] = useState('')

  const [a11, setA11] = useState(0)
  const [a12, setA12] = useState(0)
  const [a13, setA13] = useState(0)
  const [a14, setA14] = useState(0)
  const [a21, setA21] = useState(0)
  const [a22, setA22] = useState(0)
  const [a23, setA23] = useState(0)
  const [a24, setA24] = useState(0)
  const [a31, setA31] = useState(0)
  const [a32, setA32] = useState(0)
  const [a33, setA33] = useState(0)
  const [a34, setA34] = useState(0)
  const [a41, setA41] = useState(0)
  const [a42, setA42] = useState(0)
  const [a43, setA43] = useState(0)
  const [a44, setA44] = useState(0)

  useEffect(() => {
    if (a11 && a12 && a13 && a14 && a21 && a22 && a23 && a24 && a31 && a32 && a33 && a34 && a41 && a42 && a43 && a44) {
        setDisable(false)
    } else {
        setDisable(true)
    }
  }, [a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, a41, a42, a43, a44])

  function handleTask() {
    setResult(
      a11*(a22*a33*a44+a32*a43*a24+a23*a34*a42-a24*a33*a42-a23*a32*a44-a34*a43*a22) - 
      a12*(a21*a33*a44+a31*a43*a24+a23*a34*a41-a24*a33*a41-a34*a43*a21-a23*a31*a44) +
      a13*(a21*a32*a44+a31*a42*a24+a22*a34*a41-a24*a32*a41-a34*a42*a21-a22*a31*a44) -
      a14*(a21*a32*a43+a31*a42*a23+a22*a33*a41-a23*a32*a41-a33*a42*a21-a22*a31*a43)
    )
    setRes(true)
  }

  return (
    <div className={'container-fluid bg-dark py-5'}>
      
      <p className="text-warning text-center title-text">4-Darajali Determinantni Hisoblash</p>
      <p className="text-secondary text-center warning-text">Sistemaga tartib bo'yicha barcha argumentlarni kiriting va
      tugmani bosing</p>
      <p className="text-center text-danger danger-text">Argumentlar butun son bo'lishi kerak ( Kasr son qabul qilinmaydi,
      manfiy son bo'lishi mumkin ... )</p>
    
      <div className="row text-center text-white my-5">
            <div>
                <input type="number" placeholder={'a11'} onChange={(e) => setA11(e.target.value)} className="mx-3 text-center"/>
                <input type="number" placeholder={'a12'} onChange={(e) => setA12(e.target.value)} className="text-center"/>
                <input type="number" placeholder={'a13'} onChange={(e) => setA13(e.target.value)} className="mx-3 text-center"/>
                <input type="number" placeholder={'a14'} onChange={(e) => setA14(e.target.value)} className="text-center"/>
            </div>
            <div className={'my-3'}>
                <input type="number" placeholder={'a21'} onChange={(e) => setA21(e.target.value)} className="mx-3 text-center"/>
                <input type="number" placeholder={'a22'} onChange={(e) => setA22(e.target.value)} className="text-center"/>
                <input type="number" placeholder={'a23'} onChange={(e) => setA23(e.target.value)} className="mx-3 text-center"/>
                <input type="number" placeholder={'a24'} onChange={(e) => setA24(e.target.value)} className="text-center"/>
            </div>
            <div>
                <input type="number" placeholder={'a31'} onChange={(e) => setA31(e.target.value)} className="mx-3 text-center"/>
                <input type="number" placeholder={'a32'} onChange={(e) => setA32(e.target.value)} className="text-center"/>
                <input type="number" placeholder={'a33'} onChange={(e) => setA33(e.target.value)} className="mx-3 text-center"/>
                <input type="number" placeholder={'a34'} onChange={(e) => setA34(e.target.value)} className="text-center"/>
            </div>
            <div className="my-3">
                <input type="number" placeholder={'a41'} onChange={(e) => setA41(e.target.value)} className="mx-3 text-center"/>
                <input type="number" placeholder={'a42'} onChange={(e) => setA42(e.target.value)} className="text-center"/>
                <input type="number" placeholder={'a43'} onChange={(e) => setA43(e.target.value)} className="mx-3 text-center"/>
                <input type="number" placeholder={'a44'} onChange={(e) => setA44(e.target.value)} className="text-center"/>
            </div>
        </div>

        <div className={'text-center'}>
            <button className={'btn btn-success'} disabled={disable} onClick={handleTask}>Hisoblash</button>
        </div>

        {res &&
          <>
            <div className="row mt-3">
                <div className="col-6">
                    <p className={'text-center text-warning mt-5 warning-text text-res'}>Natija : {result}</p>
                </div>
            </div>
            
            <div className="row text-danger my-3">
              <i>Birinchi qadam minorlarni hosil qilib olish</i><br/>
            </div>

            <div className="row text-white">
              <div className="col-md-1 text-center pt-5">
                <p>{a11} &nbsp;&nbsp;*</p>
              </div>
              
              <div className="col-md-2">
                <div>
                    <input type="number" value={a22} className="text-center"/>
                    <input type="number" value={a23} className="text-center"/>
                    <input type="number" value={a24} className="text-center"/>
                </div>
                <div>
                    <input type="number" value={a32} className="text-center"/>
                    <input type="number" value={a33} className="text-center"/>
                    <input type="number" value={a34} className="text-center"/>
                </div>
                <div>
                    <input type="number" value={a42} className="text-center"/>
                    <input type="number" value={a43} className="text-center"/>
                    <input type="number" value={a44} className="text-center"/>
                </div>
              </div>

              <div className="col-md-1 text-center pt-5">
                {a12>0 ?
              <p>{-a12} &nbsp;&nbsp;*</p> :
              <p>+{-a12} &nbsp;&nbsp;*</p>  
              }
              </div>
              
              <div className="col-md-2">
                <div>
                    <input type="number" value={a21} className="text-center"/>
                    <input type="number" value={a23} className="text-center"/>
                    <input type="number" value={a24} className="text-center"/>
                </div>
                <div>
                    <input type="number" value={a31} className="text-center"/>
                    <input type="number" value={a33} className="text-center"/>
                    <input type="number" value={a34} className="text-center"/>
                </div>
                <div>
                    <input type="number" value={a41} className="text-center"/>
                    <input type="number" value={a43} className="text-center"/>
                    <input type="number" value={a44} className="text-center"/>
                </div>
              </div>

              <div className="col-md-1 text-center pt-5">
                {a13>=0 ?
                <p>+{a13} &nbsp;&nbsp;*</p> :
                <p>{a13} &nbsp;&nbsp;*</p>  
              }
              </div>
              
              <div className="col-md-2">
                <div>
                    <input type="number" value={a21} className="text-center"/>
                    <input type="number" value={a22} className="text-center"/>
                    <input type="number" value={a24} className="text-center"/>
                </div>
                <div>
                    <input type="number" value={a31} className="text-center"/>
                    <input type="number" value={a32} className="text-center"/>
                    <input type="number" value={a34} className="text-center"/>
                </div>
                <div>
                    <input type="number" value={a41} className="text-center"/>
                    <input type="number" value={a42} className="text-center"/>
                    <input type="number" value={a44} className="text-center"/>
                </div>
              </div>

              <div className="col-md-1 text-center pt-5">
                {a14 > 0 ?
                 <p>{-a14} &nbsp;&nbsp;*</p>:
                 <p>+{-a14} &nbsp;&nbsp;*</p> 
              }
              </div>
              <div className="col-md-2">
                <div>
                    <input type="number" value={a21} className="text-center"/>
                    <input type="number" value={a22} className="text-center"/>
                    <input type="number" value={a23} className="text-center"/>
                </div>
                <div>
                    <input type="number" value={a31} className="text-center"/>
                    <input type="number" value={a32} className="text-center"/>
                    <input type="number" value={a33} className="text-center"/>
                </div>
                <div>
                    <input type="number" value={a41} className="text-center"/>
                    <input type="number" value={a42} className="text-center"/>
                    <input type="number" value={a43} className="text-center"/>
                </div>
              </div>

            </div>

            <div className="row text-danger my-3">
              <i>Ikkinchi qadam determinantlarni uchburchak usulida hisoblab chiqish va yozish</i><br/>
            </div>
            <div className="row text-white text-center px-3">
              {a11} * ({a22*a33*a44+a32*a43*a24+a23*a34*a42-a24*a33*a42-a23*a32*a44-a34*a43*a22})
              -({-a12}) * ({a21*a33*a44+a31*a43*a24+a23*a34*a41-a24*a33*a41-a34*a43*a21-a23*a31*a44})
              +({a13}) * ({a21*a32*a44+a31*a42*a24+a22*a34*a41-a24*a32*a41-a34*a42*a21-a22*a31*a44})
              -({a14}) * ({a21*a32*a43+a31*a42*a23+a22*a33*a41-a23*a32*a41-a33*a42*a21-a22*a31*a43})
            </div>

            <div className="row text-danger my-3">
              <i>Uchinchi qadam natijani hisoblab chiqish</i><br/>
            </div>
            <div className="text-info">Natija : {result}</div>
          </>
        }

        <div>
            <div className="col-3 offset-8 py-5 mb-5">
                <p className="title-text text-warning float-end"><i>Muallif : Akramjon Rahmonov</i></p>
            </div>
        </div>

    </div>
  );
}

export default App;
