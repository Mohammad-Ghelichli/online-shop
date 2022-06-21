import React from 'react'
import styles from "./ProductGroup.module.css"
import men from "../images/men.jpg"
import jewels from "../images/jewels.jpg"
import electronic from "../images/electronic.jpg"
import women from "../images/women.jpg"

import { Link } from 'react-router-dom'
function ProductGroup() {
  return (
    <div className={styles.container}>
        <div className={styles.card} >
            <img width={200} height={200} src={jewels} alt="ba"/>
            <div className={styles.title}>
            <h3>Jewlery group</h3>
            <button><Link to="/Store">show more</Link></button>  
            </div>
            
        </div>
        <div className={styles.card} >
            <img width={200} height={200} src={men} alt="ba"/>
            <div className={styles.title}>
            <h3>Men group</h3>
            <button><Link to="/Men">show more</Link></button>  
            </div>
            
        </div>
        <div className={styles.card} >
            <img width={200} height={200} src={women} alt="ba"/>
            <div className={styles.title}>
            <h3>Women group</h3>
            <Link to="/Women"><button>show more</button></Link>  
            </div>
            
        </div>
        <div className={styles.card} >
            <img width={200} height={200} src={electronic} alt="ba"/>
            <div className={styles.title}>
            <h3>Electronic group</h3>
            <Link to="/Electronic"><button>show more</button> </Link> 
            </div>
            
        </div>
     
    </div>
  )
}

export default ProductGroup