import React from 'react';
import {Product} from '../';
import uuid from 'react-uuid';
import { FadeTransform } from 'react-animation-components';

const ProductList = ({items, compare, watch}) =>
      <FadeTransform in
          transformProps={{
              exitTransform: 'scale(0.6) translateX(-1000px) translateY(-500px)',
          }}
          
          duration={700}>

        <div className="productList" style={{paddingRight: "45px", paddingLeft: "45px", position: "relative", bottom: "25px"}}>
          <div className="row mt-3">
                {items.map((item) =>
                  
                  <Product key={uuid()} item={item} compare={compare} watch={watch}/>

                  )}
            </div>
        </div>

      </FadeTransform>

export default ProductList
