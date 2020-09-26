import React from 'react';
import {Product} from '../';
import uuid from 'react-uuid';
import {Stagger} from 'react-animation-components';

const ProductList = ({items, compare, watch}) =>


        <div className="productList" style={{paddingRight: "45px", paddingLeft: "45px", position: "relative", bottom: "25px"}}>
          <div className="row mt-3">
                {items.map((item) =>
                    <Product key={uuid()} item={item} compare={compare} watch={watch}/>
                  )}
            </div>
        </div>



export default ProductList
