
import './App.css'
import pic01 from './assets/01.png'
import pic02 from './assets/02.png'
import pic03 from './assets/04.png'
import pic04 from './assets/05.png'
import pic05 from './assets/06.png'
import pic06 from './assets/07.png'
import pic07 from './assets/08.png'
import pic08 from './assets/09.png'
import pic09 from './assets/10.png'
import pic10 from './assets/11.png'
import pic11 from './assets/12.png'
import pic12 from './assets/13.png'
import pic13 from './assets/14.png'
import pic14 from './assets/15.png'
import pic15 from './assets/16.png'
import pic16 from './assets/17.png'
import pic17 from './assets/18.png'
import pic18 from './assets/19.png'
import pic19 from './assets/20.png'
import pic20 from './assets/21.png'
import pic21 from './assets/22.png'
import pic22 from './assets/23.png'

const data = [
  {
    id: 1,
    image: pic01,
  },
  {
    id: 2,
    image: pic02,
  },
  {
    id: 3,
    image: pic03,
  },
  {
    id: 4,
    image: pic04,
  },
  {
    id: 5,
    image: pic05,
  },
  {
    id: 6,
    image: pic06,
  },
  {
    id: 7,
    image: pic07,
  },
  {
    id: 8,
    image: pic08,
  },
  {
    id: 9,
    image: pic09,
  },
  {
    id: 10,
    image: pic10,
  },
  {
    id: 11,
    image: pic11,
  },
  {
    id: 12,
    image: pic12,
  },
  {
    id: 13,
    image: pic13,
  },
  {
    id: 14,
    image: pic14,
  },
  {
    id: 15,
    image: pic15,
  },
  {
    id: 16,
    image: pic16,
  },
  {
    id: 17,
    image: pic17,
  },
  {
    id: 18,
    image: pic18,
  },
  {
    id: 19,
    image: pic19,
  },
  {
    id: 2,
    image: pic20,
  },
  {
    id: 21,
    image: pic21,
  },
  {
    id: 22,
    image: pic22,
  },
]

function App() {

  return (
    <>
      <div className="App">
      {/* Tiêu đề trang */}
      <header className="App-header">
        <h1>MIS Midterm Project by Group 07: Drive My Motorbike</h1>
      </header>

      {/* Bảng thông tin sinh viên */}
      <section className="student-info">
        <table>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>521H0179</td>
              <td>Nguyễn Trần Trương Tú</td>
              
            </tr>
            <tr>
              <td>521H0272</td>
              <td>Nguyễn Gia Mỹ</td>
              
            </tr>
            <tr>
              <td>521H0435</td>
              <td>Vũ Bảo An</td>
              
            </tr>
            <tr>
              <td>522H0101</td>
              <td>Hồ Thanh Dinh</td>
              
            </tr>
          </tbody>
        </table>
      </section>

      {/* Danh sách ảnh */}
      <section className="image-list">
        {data.map((item) => (
          <img
            key={item.id}
            src={item.image}
            alt={`Pic ${item.id}`}
            className="image-item"
          />
        ))}
      </section>
    </div>


    </>
  )
}

export default App
