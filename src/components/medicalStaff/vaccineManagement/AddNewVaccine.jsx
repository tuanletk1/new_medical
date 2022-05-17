import React from 'react'
import './addNewVaccine.css'
export default function AddNewVaccine() {
  return (
    <div className='addNewVacc'>
      <main class="containerVac">
        <h2>Nhập thêm Vắc Xin</h2>

        <div class="row">
            <div class="inputbox">
                <input type="text" id="name" name="" required/> 
                <label for="name">Loại Vắc Xin</label>
            </div>
            <div class="inputbox">
                <input type="mail" id="name" name="" required/>
                <label for="name">Số lượng</label>
            </div>
        </div>
        <div class="row">
            <div class="inputbox">
                <input type="date" id="name" name="" required className='dateinput'/>
                <label for="name">Ngày nhập</label>
            </div>
            <div class="inputbox">
                <input type="date" id="name" name="" required className='dateinput'/>
                <label for="name">Ngày sản xuất</label>
            </div>
            <div class="inputbox">
                <input type="date" id="name" name="" required className='dateinput'/>
                <label for="name">Ngày hết hạn</label>
            </div>
        </div>

        
            <div class="row">
            <button className='addvacc' type='submit'>Thêm mới</button>
        </div>

        
    </main>  
    </div>
  )
}
