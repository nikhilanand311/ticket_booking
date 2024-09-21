/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "../Categorycard/CategorycardComp.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faVolleyball, faMasksTheater, faBusinessTime } from '@fortawesome/free-solid-svg-icons'


export default function CategorycardComp() {
  return (
    <div>
        
<div class="container listar-hero-categories-design-marker">
  <div class="row">
    <div class="col-sm-12 col-md-12">
      <div class="searchbox listar-hero-header">
        <div class="bg-color-blend"></div>
        <div class="s-img-con">
        </div>

              
        <div class="listar-search-categories listar-categories-fixed-bottom">
          <div class="listar-listing-categories">
            <a>
              <div>
                <div class="listar-category-icon-wrapper">
                  <div class="listar-category-icon-box" ></div>
                  <span class="far fa-moon"> <FontAwesomeIcon icon={faMusic} size="xl" />
                  </span>
                </div>
                <div class="listar-header-category-name">
                  Music </div>
              </div>
            </a>

            <a>
              <div>
                <div class="listar-category-icon-wrapper">
                  <div class="listar-category-icon-box" ></div>
                  <span class="fab fa-airbnb"> <FontAwesomeIcon icon={faMasksTheater} size="xl"/>
                  </span>
                </div>
                <div class="listar-header-category-name">
                  Drama </div>
              </div>
            </a>

            <a>
              <div>
                <div class="listar-category-icon-wrapper">
                  <div class="listar-category-icon-box" ></div>
                  <span class="fab fa-fly"> <FontAwesomeIcon icon={faBusinessTime} size="xl"/>
                  </span>
                </div>
                <div class="listar-header-category-name">
                  Conference </div>
              </div>
            </a>

            <a>
              <div>
                <div class="listar-category-icon-wrapper">
                  <div class="listar-category-icon-box" ></div>
                  <span class="fab fa-forumbee"> <FontAwesomeIcon icon={faVolleyball} size="xl"/>
                  </span>
                </div>
                <div class="listar-header-category-name">
                  Sports </div>
              </div>
            </a>

            

          </div>
        </div>
        

      </div>
    </div>
  </div>
</div>
    </div>
  )
}
