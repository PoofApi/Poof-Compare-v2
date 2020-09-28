import React from 'react';
import {Product} from '../';
import uuid from 'react-uuid';
import {Stagger, Fade} from 'react-animation-components';

const ProductList = ({items, compare, watch}) =>

        <div className="productList" style={{paddingRight: "45px", paddingLeft: "45px", position: "relative", bottom: "25px"}}>
          <div className="row mt-3">
                {items.map((item) =>
                    <div className="col-sm-12 col-md-6 col-lg-3">
          <Stagger duration={700} in>

                    <Fade in enterOpacity={1} delay={10000} duration={5000}>
                    
                          <Product key={uuid()} item={item} compare={compare} watch={watch}/>
                    
                    </Fade>

          </Stagger>
                    </div>
                    )}
            </div>
        </div>



export default ProductList
