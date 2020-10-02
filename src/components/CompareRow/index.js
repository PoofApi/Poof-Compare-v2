const CompareRow = (store) => 
    <div className="compareTableContainer">
        <div className="container-fluid container-scroll watchContainer compareContainer" key={uuid()}>
            <div className="row">
                {this.props.items.map(item =>
                    <div className="col-4 col-md-2">
                        <div className="card poofCompareCard">
                        <div className="row">
                            <div className="col-md-4 poofCompareImage">
                            <img src={item.image} alt={item.title} key={item.id} style={{width: "50px", height: "70px"}}/>
                            </div>
                            <div className="card-price" style={{position: "absolute", left: "10%", bottom: "8%", color: "#e64949"}}>
                            <b>{`$${item.price}`}</b>
                            </div>
                            <div className="col-2 col-md-7 poofCompareCardBody">
                            <div className="card-body">
                                <div className="poofCardTitle">{item.title}</div>
                                <div className="card-text poofCardText">
                                <div className="compareBtnRow">
                                    <span className="removeToolCompare">
                                    {/* <span className="removeTooltipText">Remove from watchlist</span> */}
                                    <i className="material-icons removeBtnCompare" onClick={() => store.dispatch(removeFromCompare(item))}>cancel</i>
                                    </span>
                                    <span className="purchaseToolCompare">
                                    {/* <span className="purchaseTooltipTextCompare">Go to product source</span> */}
                                    <a href={`${item.itemUrl ? item.itemUrl : item.link}`}  target="_blank" className="purchaseLinkBtnAnchorCompare"><i className="material-icons purchaseLinkIconBtnCompare">launch</i></a>
                                    </span>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>

export default CompareRow;