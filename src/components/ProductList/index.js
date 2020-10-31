import React from 'react';
import {Product} from '../';
import uuid from 'react-uuid';
import {Stagger, Fade} from 'react-animation-components';

const ProductList = ({items, compare, watch}) =>

        <div className="productList" style={{paddingRight: "45px", paddingLeft: "45px", position: "relative", bottom: "5vh"}}>
          <div className="row mt-3">
                {items.map((item) =>
                    <div className="col-sm-12 col-md-6 col-lg-3">
          <Stagger duration={1000} in>

                    <Fade duration={5000} enterOpacity={1} in>
                    
                          <Product key={uuid()} item={item} compare={compare} watch={watch}/>
                    
                    </Fade>

          </Stagger>
                    </div>
                    )}
            </div>
        </div>



export default ProductList
