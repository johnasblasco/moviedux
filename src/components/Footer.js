import react from 'react';
import '../styles.css';

export default function Footer(){
      let hatdog ;

      switch(new Date().getDay()){
            case 0: hatdog = 'sunday'
            break;
            case 1: hatdog = 'monday'
            break;
            case 2: hatdog = 'wednesday'
            break;
            default: hatdog = 'tite'
            break;
      }
      


      return(
            <footer className='footer'>
                  <p className='footer-text'>
                        &copy; sheesh bobo {hatdog}
                        


                 
                        
                        
                  </p>

            </footer>
      );

}



