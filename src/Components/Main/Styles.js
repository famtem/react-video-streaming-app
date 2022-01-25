import styled from 'styled-components'




export const ContainerMain = styled.section`
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
    align-items: center;
    width: 100%;
    height: 84.6vh;
    padding: 5rem 5rem;
    background-color: transparent;
    
    

    div {
         
         padding: .5rem;    
         
       
        &.infos {
            background-color: transparent;
            width: 50%;
            margin-right: .8rem;
          
            

            h1 {
                font-size: 3rem;
                margin-bottom: .3rem;
                color: white;
            }

            p {
                color: white;
                margin-bottom: .8rem;
                letter-spacing: .1rem;
                font-size: .7rem;
                text-align: left;

            }

            h3 {
                color: white;
                margin-bottom: .5rem;
            }
        }

        &.btns {
            width: 100%      
            height: 5rem;  
            display: flex;
            flex-flow: row wrap;
            padding: 0;        
            margin-top: 1.2rem;  
            margin-bottom: 1rem;

           
        }

        &.movie {
                background-color: rgba(1, 1, 1, 0.4);
                width: 40%;
                height: 2rem;
                margin-right: .4rem;
                border-radius: 1rem;
                border: 1px solid white;
                justify-content: center;
            }

        &.downloadbtn {
                background-color: transparent;
                width: 30%;
                height: 2rem;
                border-radius: 1rem;
                border: 1px solid white;
                justify-content: center;
            }

        &.image {
            background-color: transparent transparent transparent;
            overflow: hidden;    
            display: flex;
            width: 260px;
            height: 300px;
            margin-right: 7rem;
            justify-content: center;
            align-items: center;
            border: 1px solid white;
            border-radius: 10px;
            box-shadow: 1px 1px 20px 10px rgba(255, 255, 255, 0.1);
                        

            img {
                width: 220px;      
             
                margin-top: 1rem;
                border-radius: 10px;
                transition: all 2s;

                &:hover {
                    transform: scale(1.1);
                }               
            }

            

        }    
    }
    
`