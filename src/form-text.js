import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default function FormText(){
    const textPwsd = React.useRef()
    const textPwsd2 = React.useRef()

    const onBlurPassword = () =>{
        let pswd = textPwsd.current.value
        if(pswd!== '' && !pswd.match(/^[0-9a-zA-Z]+$/)){
            textPwsd.current.value = ''
            alert('ต้องเป็น 0 - 9 หรือ a - z หรือ A - Z เท่านั้น')
        }
    }
    const onBlurPassword2 = () =>{
        if(textPwsd.current.value != textPwsd2.current.value){
            textPwsd2.current.value = ''
            alert('รหัสผ่านทั้งสองช่องไม่ตรงกัน')
        }
    }
    return(
        <div className="mt-4 mx-auto p-3 rounded" style={{width:'400px',background:'#cee'}}>
            <form>
                <div className="form-group mb-2">
                    <label htmlFor="login">ชื่อผู้ใช้(Login)</label>
                    <input type="text" id="login" name="login" maxLength="20" className="form-control form-control-sm"/>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="pswd">รหัสผ่าน</label>
                    <input type="password" id="pswd" name="pswd" maxLength="10" className="form-control form-control-sm" ref={textPwsd} onBlur={onBlurPassword}/>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="pswd2">ใส่รหัสผ่านซ้ำ</label>
                    <input type="password" id="pswd2" className="form-control form-control-sm" ref={textPwsd2} onBlur={onBlurPassword2}/>
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="memo">บันทึกช่วยจำ</label>
                    <textarea id="memo" name="memo" rows="2" maxLength="200" className="form-control form-control-sm"></textarea>
                </div>
                <div className="text-center">
                    <button type="button" className="btn btn-sm px-4 btn-primary">
                        OK
                    </button>
                </div>
            </form>
        </div>
    )
}