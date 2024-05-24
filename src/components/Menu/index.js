import React from 'react';
import './menu.css'

const imgOne = './images/menuItemOne.png';
const imgTwo = './images/menuItemTwo.png';
const imgThree = './images/menuItemThree.png';
const imgFour = './images/menuItemFour.png';
const imgFive = './images/menuItemFive.png';
const imgSix = './images/menuItemSix.png';

const imgOneName = 'Magnam Tiste';
const imgTwoName = 'Aut Luia';
const imgThreeName = 'Est Eligendi';
const imgFourName = 'Eos Luibusdam';
const imgFiveName = 'Eos Luibusdam';
const imgSixName = 'Laboriosam Direva';

const imgOnePrice = '$5.95'
const imgTwoPrice = '$14.95'
const imgThreePrice = '$8.95'
const imgFourPrice = '$12.95'
const imgFivePrice = '$12.95'
const imgSixPrice = '$9.95'


const images = [
                    {
                        path : imgOne,
                        dishName : imgOneName,
                        price : imgOnePrice, 
                    },

                    {
                        path : imgTwo,
                        dishName : imgTwoName,
                        price : imgTwoPrice, 
                    },

                    {
                        path : imgThree,
                        dishName : imgThreeName,
                        price : imgThreePrice, 
                    },

                    {
                        path : imgFour,
                        dishName : imgFourName,
                        price : imgFourPrice, 
                    },

                    {
                        path : imgFive,
                        dishName : imgFiveName,
                        price : imgFivePrice, 
                    },

                    {
                        path : imgSix,
                        dishName : imgSixName,
                        price : imgSixPrice, 
                    },
            ];


function Menu() {
  return (
    <div className='menu text-center'>
      <p>OUR MENU</p>
      <h1>Check Our Yummy Menu</h1>

      <div className='row'>
        {
            images.map((img)=>{
                return(
                    <>
                        <div className='col-4 mt-5'>
                            <div>
                                <img src={img.path} alt='dish' width='75%' />
                            </div>
                            <div>
                                <h3 className='mt-3'>{img.dishName}</h3>
                                <p className='mb-1'>Lorem, deren, trataro, filede, nerada</p>
                                <h3 className='text-danger'>{img.price}</h3>
                            </div>
                        </div>
                    </>
                )
            })
        }
      </div>
    </div>
  )
}

export default Menu;
