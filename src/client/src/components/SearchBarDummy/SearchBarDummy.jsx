import React, { Component } from 'react'
import { connect } from 'react-redux'
import './SearchBarDummy.css'

export class SearchBarDummy extends Component {
    render() {
        return (
            <div>
      <div className="container-fluid" id="hs-wrapper">
        <article id="main">
          <section id="content">
            <div className="hide-message hide-map" id="homestay-listing">
              <div className="search-bar" id="search">
                <form id="homestay-main-search" noValidate="novalidate" className="simple_form new_search" action="/homestays/search.json" acceptCharset="UTF-8" data-remote="true" method="get">
                  <input name="utf8" type="hidden" defaultValue="✓" />
                  <div className="search-fields">
                    <input name="search_type" className="search-type" defaultValue="search_box" type="hidden" id="search_search_type" /><input name="latitude" className="latitude" type="hidden" defaultValue="51.5077" id="search_latitude" /><input name="longitude" className="longitude" type="hidden" defaultValue="-0.128" id="search_longitude" /><input name="country_code" className="country" type="hidden" defaultValue="GB" id="search_country_code" /><input name="ne_lat" className="ne-lat" type="hidden" defaultValue="51.715785" id="search_ne_lat" /><input name="ne_lng" className="ne-lng" type="hidden" defaultValue="0.33031977" id="search_ne_lng" /><input name="sw_lat" className="sw-lat" type="hidden" defaultValue="51.234893" id="search_sw_lat" /><input name="sw_lng" className="sw-lng" type="hidden" defaultValue="-0.66618158" id="search_sw_lng" /><input name="radius" className="radius" type="hidden" id="search_radius" /><input name="type" className="type" type="hidden" id="search_type" /><input name="order" className="order" type="hidden" id="search_order" /><input name="location_id" className="location-id" type="hidden" id="search_location_id" /><input name="google_place_id" className="google-place-id" type="hidden" id="search_google_place_id" /><input name="price_filter_nights" className="price-filter-nights" type="hidden" id="search_price_filter_nights" />
                    <div className="form-group string optional search_location">
                      <div>
                        <div className="hs-input-inline-icon"><input className="form-control string optional location" name="location" placeholder="Where do you want to go?" type="text" defaultValue="London, United Kingdom" id="search_location" />
                          <div className="hs-icon-pin location-icon hs-icon input-icon" />
                        </div>
                        <div className="spinner-backdrop white-bg hidden">
                          <div className="spinner x-small" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group string optional search_check_in">
                      <div>
                        <div className="hs-input-inline-icon"><input className="form-control string optional check-in" autoComplete="off" name="check_in" data-title="Select dates to see available homestays and exact room prices for your stay" placeholder="Check In" type="text" id="search_check_in" />
                          <div className="hs-icon-check-in check_in-icon hs-icon input-icon" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group string optional search_check_out">
                      <div>
                        <div className="hs-input-inline-icon"><input className="form-control string optional check-out" autoComplete="off" name="check_out" data-title="Select **check out** date" placeholder="Check Out" type="text" id="search_check_out" />
                          <div className="hs-icon-check-out check_out-icon hs-icon input-icon" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group select optional search_guests">
                      <div>
                        <div className="hs-input-inline-icon"><select className="form-control select optional guests" name="guests" id="search_guests"><option selected="selected" value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                            <option value={13}>13</option>
                            <option value={14}>14</option>
                            <option value={15}>15</option>
                            <option value={16}>16</option></select>
                          <div className="hs-icon-avatar guests-icon hs-icon input-icon" />
                        </div>
                      </div>
                    </div>
                    <div className="search_submit form-group"><input type="submit" name="commit" defaultValue="Search" className="submit button main" id="search-submit" />
                      <div className="submit-icon input-icon" />
                      <div className="sk-circle search-button-loading-spinner">
                        <div className="sk-circle1 sk-child" />
                        <div className="sk-circle2 sk-child" />
                        <div className="sk-circle3 sk-child" />
                        <div className="sk-circle4 sk-child" />
                        <div className="sk-circle5 sk-child" />
                        <div className="sk-circle6 sk-child" />
                        <div className="sk-circle7 sk-child" />
                        <div className="sk-circle8 sk-child" />
                        <div className="sk-circle9 sk-child" />
                        <div className="sk-circle10 sk-child" />
                        <div className="sk-circle11 sk-child" />
                        <div className="sk-circle12 sk-child" />
                      </div>
                    </div>
                  </div>
                  <ul className="nav">
                    <li id="filters" role="presentation"><a aria-expanded="false" aria-haspopup="true" className="filter-toggle" data-toggle="dropdown" href="#">
                        <h5>Filters&nbsp;(<span className="filter_counter">0</span>)<div className="caret">
                          </div>
                        </h5>
                      </a>
                      <div className="dropdown-menu panel panel-default dropdown-menu-right" id="fields-container">
                        <div className="mobile-modal-title close-filter filters-btn button no-shadow">
                          Filters<span className="filter-count">0</span><i className="hs-icon-chevron-down" />
                        </div>
                        <input name="min_price" type="hidden" id="search_min_price" /><input name="max_price" type="hidden" id="search_max_price" /><input name="price_filter_currency" defaultValue="EUR" type="hidden" id="search_price_filter_currency" /><input name="price_bracket" type="hidden" id="search_price_bracket" />
                        <div className="panel-body toggle-panel">
                          <div className="col-lg-3">
                            <div className="price-filter-container">
                              <ul className="list-group list-group-flush">
                                <li className="list-group-item title">Price Range</li>
                                <li className="list-group-item price_filter" id="price_filter_mobile">
                                  <div className="price-filter-slider" />
                                  <div className="title">Price Range</div>
                                  <div className="slider-values">
                                    <div className="minimum-price">
                                      <span className="minimum-price-label" data-amount={0} data-currency-code="EUR" data-format="no-cents" data-price="true" /><span className="price-filter-overflow-label hidden">+</span>
                                    </div>
                                    <div className="maximum-price">
                                      <span className="maximum-price-label" data-amount={50000} data-currency-code="EUR" data-format="no-cents" data-price="true" /><span className="price-filter-overflow-label hidden">+</span>
                                    </div>
                                  </div>
                                  <div className="price-filter-rate" />
                                </li>
                              </ul>
                            </div>
                            <ul className="list-group list-group-flush distance-indicator-container">
                              <li className="list-group-item title distance-indicator-title">Distance
                                From Centre</li>
                              <li className="list-group-item distance_indicator">
                                <div id="distance-indicator-slider" />
                                <div className="slider-values">
                                  <div className="maximum-distance">
                                    <span id="distance-indicator-label" /></div>
                                </div>
                              </li>
                            </ul>
                            <div className="inner-panel closed">
                              <h4>Meals<span className="inner-filter-count">0</span><i className="hs-icon-plus-circle pull-right" />
                              </h4>
                              <ul className="list-group list-group-flush body">
                                <li className="list-group-item">
                                  <div className="form-group boolean optional search_meals_provided">
                                    <label className="control-label boolean optional" htmlFor="search_meals_provided">Meals Provided</label>
                                    <div>
                                      <input defaultValue={0} name="meals_provided" type="hidden" /><label><input className="form-control boolean optional" name="meals_provided" type="checkbox" defaultValue={1} id="search_meals_provided" /></label>
                                    </div>
                                  </div>
                                </li>
                                <li className="list-group-item">
                                  <div className="form-group boolean optional search_self_catering">
                                    <label className="control-label boolean optional" htmlFor="search_self_catering">Use of Kitchen</label>
                                    <div>
                                      <input defaultValue={0} name="self_catering" type="hidden" /><label><input className="form-control boolean optional" name="self_catering" type="checkbox" defaultValue={1} id="search_self_catering" /></label>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="inner-panel closed results-sorting">
                              <h4>Sorting</h4>
                              <div className="results-sorting-container">
                                <ul className="list-group list-group-flush result-sorting">
                                  <li className="order-toggle "><a data-type="json" data-order data-remote="true" href="/cuba/havana?localised_content=true&page=1">Our
                                      Picks</a></li>
                                  <li className="order-toggle "><a data-type="json" data-order="reviews" data-remote="true" href="/cuba/havana?localised_content=true&order=reviews&page=1"><span className="desktop">Most Reviewed</span><span className="mobile">Reviews</span></a>
                                  </li>
                                  <li className="order-toggle "><a data-type="json" data-order="distance" data-remote="true" href="/cuba/havana?localised_content=true&order=distance&page=1">Distance</a>
                                  </li>
                                  <li className="order-toggle "><a data-type="json" data-order="popular" data-remote="true" href="/cuba/havana?localised_content=true&order=popular&page=1">Popular</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="inner-panel closed">
                              <h4>Host
                                welcomes<span className="inner-filter-count">0</span><i className="hs-icon-plus-circle pull-right" />
                              </h4>
                              <ul className="list-group list-group-flush body">
                                <li className="list-group-item">
                                  <div className="form-group boolean optional search_accept_male">
                                    <label className="control-label boolean optional" htmlFor="search_accept_male">Males</label>
                                    <div>
                                      <input defaultValue={0} name="accept_male" type="hidden" /><label><input className="form-control boolean optional" name="accept_male" type="checkbox" defaultValue={1} id="search_accept_male" /></label>
                                    </div>
                                  </div>
                                </li>
                                <li className="list-group-item">
                                  <div className="form-group boolean optional search_accept_female">
                                    <label className="control-label boolean optional" htmlFor="search_accept_female">Females</label>
                                    <div>
                                      <input defaultValue={0} name="accept_female" type="hidden" /><label><input className="form-control boolean optional" name="accept_female" type="checkbox" defaultValue={1} id="search_accept_female" /></label>
                                    </div>
                                  </div>
                                </li>
                                <li className="list-group-item">
                                  <div className="form-group boolean optional search_accept_couples">
                                    <label className="control-label boolean optional" htmlFor="search_accept_couples">Couples</label>
                                    <div>
                                      <input defaultValue={0} name="accept_couples" type="hidden" /><label><input className="form-control boolean optional" name="accept_couples" type="checkbox" defaultValue={1} id="search_accept_couples" /></label>
                                    </div>
                                  </div>
                                </li>
                                <li className="list-group-item">
                                  <div className="form-group boolean optional search_accept_families">
                                    <label className="control-label boolean optional" htmlFor="search_accept_families">Families</label>
                                    <div>
                                      <input defaultValue={0} name="accept_families" type="hidden" /><label><input className="form-control boolean optional" name="accept_families" type="checkbox" defaultValue={1} id="search_accept_families" /></label>
                                    </div>
                                  </div>
                                </li>
                                <li className="list-group-item">
                                  <div className="form-group boolean optional search_accept_students">
                                    <label className="control-label boolean optional" htmlFor="search_accept_students">Students</label>
                                    <div>
                                      <input defaultValue={0} name="accept_students" type="hidden" /><label><input className="form-control boolean optional" name="accept_students" type="checkbox" defaultValue={1} id="search_accept_students" /></label>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="inner-panel closed">
                              <h4>Pets<span className="inner-filter-count">0</span><i className="hs-icon-plus-circle pull-right" />
                              </h4>
                              <ul className="list-group list-group-flush body">
                                <li className="list-group-item">
                                  <div className="form-group boolean optional search_no_pets">
                                    <label className="control-label boolean optional" htmlFor="search_no_pets">No pets</label>
                                    <div>
                                      <input defaultValue={0} name="no_pets" type="hidden" /><label><input className="form-control boolean optional" name="no_pets" type="checkbox" defaultValue={1} id="search_no_pets" /></label>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="inner-panel closed">
                              <h4>Hobbies<span className="inner-filter-count">0</span><i className="hs-icon-plus-circle pull-right" />
                              </h4>
                              <ul className="list-group list-group-flush body">
                                <li className="list-group-item">
                                  <div className="form-group boolean optional search_cooking">
                                    <label className="control-label boolean optional" htmlFor="search_cooking">Cooking</label>
                                    <div>
                                      <input defaultValue={0} name="cooking" type="hidden" /><label><input className="form-control boolean optional" name="cooking" type="checkbox" defaultValue={1} id="search_cooking" /></label>
                                    </div>
                                  </div>
                                </li>
                                <li className="list-group-item">
                                  <div className="form-group boolean optional search_golf">
                                    <label className="control-label boolean optional" htmlFor="search_golf">Golf</label>
                                    <div>
                                      <input defaultValue={0} name="golf" type="hidden" /><label><input className="form-control boolean optional" name="golf" type="checkbox" defaultValue={1} id="search_golf" /></label>
                                    </div>
                                  </div>
                                </li>
                                <li className="list-group-item">
                                  <div className="form-group boolean optional search_tennis">
                                    <label className="control-label boolean optional" htmlFor="search_tennis">Tennis</label>
                                    <div>
                                      <input defaultValue={0} name="tennis" type="hidden" /><label><input className="form-control boolean optional" name="tennis" type="checkbox" defaultValue={1} id="search_tennis" /></label>
                                    </div>
                                  </div>
                                </li>
                                <li className="list-group-item">
                                  <div className="form-group boolean optional search_hiking">
                                    <label className="control-label boolean optional" htmlFor="search_hiking">Hiking</label>
                                    <div>
                                      <input defaultValue={0} name="hiking" type="hidden" /><label><input className="form-control boolean optional" name="hiking" type="checkbox" defaultValue={1} id="search_hiking" /></label>
                                    </div>
                                  </div>
                                </li>
                                <li className="list-group-item">
                                  <div className="form-group boolean optional search_cycling">
                                    <label className="control-label boolean optional" htmlFor="search_cycling">Cycling</label>
                                    <div>
                                      <input defaultValue={0} name="cycling" type="hidden" /><label><input className="form-control boolean optional" name="cycling" type="checkbox" defaultValue={1} id="search_cycling" /></label>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="inner-panel closed">
                              <h4>Accessibility<span className="inner-filter-count">0</span><i className="hs-icon-plus-circle pull-right" />
                              </h4>
                              <ul className="list-group list-group-flush body">
                                <li className="list-group-item">
                                  <div className="form-group boolean optional search_wheelchair_accessible">
                                    <label className="control-label boolean optional" htmlFor="search_wheelchair_accessible"><span className="translation_missing" title="translation missing: en.homestays.show.amenities.wheelchair_accessible">Wheelchair Accessible</span></label>
                                    <div>
                                      <input defaultValue={0} name="wheelchair_accessible" type="hidden" /><label><input className="form-control boolean optional" name="wheelchair_accessible" type="checkbox" defaultValue={1} id="search_wheelchair_accessible" /></label>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="inner-panel closed">
                              <h4>Amenities<span className="inner-filter-count">0</span><i className="hs-icon-plus-circle pull-right" />
                              </h4>
                              <ul className="list-group list-group-flush body">
                                <li className="list-group-item">
                                  <div className="form-group boolean optional search_wifi">
                                    <label className="control-label boolean optional" htmlFor="search_wifi">Wireless Internet</label>
                                    <div>
                                      <input defaultValue={0} name="wifi" type="hidden" /><label><input className="form-control boolean optional" name="wifi" type="checkbox" defaultValue={1} id="search_wifi" /></label>
                                    </div>
                                  </div>
                                </li>
                                <li className="list-group-item">
                                  <div className="form-group boolean optional search_tv">
                                    <label className="control-label boolean optional" htmlFor="search_tv">TV</label>
                                    <div>
                                      <input defaultValue={0} name="tv" type="hidden" /><label><input className="form-control boolean optional" name="tv" type="checkbox" defaultValue={1} id="search_tv" /></label>
                                    </div>
                                  </div>
                                </li>
                                <li className="list-group-item">
                                  <div className="form-group boolean optional search_garden">
                                    <label className="control-label boolean optional" htmlFor="search_garden">Garden</label>
                                    <div>
                                      <input defaultValue={0} name="garden" type="hidden" /><label><input className="form-control boolean optional" name="garden" type="checkbox" defaultValue={1} id="search_garden" /></label>
                                    </div>
                                  </div>
                                </li>
                                <li className="list-group-item">
                                  <div className="form-group boolean optional search_bikes">
                                    <label className="control-label boolean optional" htmlFor="search_bikes">Bikes for use</label>
                                    <div>
                                      <input defaultValue={0} name="bikes" type="hidden" /><label><input className="form-control boolean optional" name="bikes" type="checkbox" defaultValue={1} id="search_bikes" /></label>
                                    </div>
                                  </div>
                                </li>
                                <li className="list-group-item">
                                  <div className="form-group boolean optional search_parking">
                                    <label className="control-label boolean optional" htmlFor="search_parking">Parking</label>
                                    <div>
                                      <input defaultValue={0} name="parking" type="hidden" /><label><input className="form-control boolean optional" name="parking" type="checkbox" defaultValue={1} id="search_parking" /></label>
                                    </div>
                                  </div>
                                </li>
                                <li className="list-group-item">
                                  <div className="form-group boolean optional search_swimming_pool">
                                    <label className="control-label boolean optional" htmlFor="search_swimming_pool">Swimming Pool</label>
                                    <div>
                                      <input defaultValue={0} name="swimming_pool" type="hidden" /><label><input className="form-control boolean optional" name="swimming_pool" type="checkbox" defaultValue={1} id="search_swimming_pool" /></label>
                                    </div>
                                  </div>
                                </li>
                                <li className="list-group-item">
                                  <div className="form-group boolean optional search_gym">
                                    <label className="control-label boolean optional" htmlFor="search_gym">Gym at home</label>
                                    <div>
                                      <input defaultValue={0} name="gym" type="hidden" /><label><input className="form-control boolean optional" name="gym" type="checkbox" defaultValue={1} id="search_gym" /></label>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button className="close-filter border-button brown wide">View Homestays</button>
                          </div>
                        </div>
                        <div className="panel-footer">
                          <span className="homestay-counter"><span className="count">1959</span>&nbsp;Homestays</span><span className="clear-filters"><a href="#">Clear Filters</a></span>
                        </div>
                      </div>
                    </li>
                    <li id="price_filter_desktop" role="presentation">
                      <div className="slider-padding">
                        <div className="price-filter-slider" />
                        <div className="title">Price Range</div>
                        <div className="slider-values">
                          <div className="minimum-price">
                            <span className="minimum-price-label" data-amount={0} data-currency-code="EUR" data-format="no-cents" data-price="true" /><span className="price-filter-overflow-label hidden">+</span>
                          </div>
                          <div className="maximum-price">
                            <span className="maximum-price-label" data-amount={50000} data-currency-code="EUR" data-format="no-cents" data-price="true" /><span className="price-filter-overflow-label hidden">+</span>
                          </div>
                        </div>
                        <div className="price-filter-rate" />
                      </div>
                    </li>
                    <li className="navbar-dropdown-heading" role="presentation"><a aria-expanded="false" aria-haspopup="true" className="filter-toggle" data-toggle="dropdown" href="#">
                        <h5>Sorting<div className="caret" />
                        </h5>
                      </a>
                      <div className="navbar-dropdown dropdown-menu panel panel-default dropdown-menu-right" id="results-sorting-container">
                        <ul className="list-group list-group-flush result-sorting">
                          <li className="order-toggle on"><a data-type="json" data-order data-remote="true" href="/united-kingdom/london?localised_content=true&page=1">Our
                              Picks</a></li>
                          <li className="order-toggle "><a data-type="json" data-order="reviews" data-remote="true" href="/united-kingdom/london?localised_content=true&order=reviews&page=1"><span className="desktop">Most Reviewed</span><span className="mobile">Reviews</span></a>
                          </li>
                          <li className="order-toggle "><a data-type="json" data-order="distance" data-remote="true" href="/united-kingdom/london?localised_content=true&order=distance&page=1">Distance</a>
                          </li>
                          <li className="order-toggle "><a data-type="json" data-order="popular" data-remote="true" href="/united-kingdom/london?localised_content=true&order=popular&page=1">Popular</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </form>
              </div>
              
              </div>
    
          </section>
        </article>
        </div>
      </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarDummy)
