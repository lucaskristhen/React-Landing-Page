import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="150px" height="120px" viewBox="0 3000 12000 5890">
<g id="layer101" fill="#0f497b" stroke="none">
<path d="M3370 4599 c-179 -105 -366 -215 -417 -245 -50 -30 -97 -54 -105 -54 -7 0 -31 11 -53 23 -494 286 -793 457 -801 457 -4 0 -71 -38 -148 -84 -78 -46 -206 -122 -286 -169 -80 -48 -149 -90 -155 -94 -6 -5 -8 -105 -5 -280 l5 -273 140 81 c233 135 312 179 320 179 4 0 42 -20 84 -43 121 -69 416 -239 419 -242 1 -1 -48 -30 -110 -65 -62 -35 -147 -82 -188 -105 -41 -23 -101 -57 -132 -74 l-58 -32 0 -280 0 -279 -57 32 c-32 18 -139 80 -238 139 l-180 106 -3 281 c-2 204 -5 282 -14 282 -6 0 -79 -41 -162 -91 -83 -51 -188 -114 -233 -141 l-83 -49 0 -343 c0 -263 3 -346 13 -354 13 -11 562 -344 735 -446 l102 -60 0 -501 0 -500 78 -47 c42 -26 179 -108 304 -182 l227 -136 153 91 c84 50 176 106 204 124 27 18 69 42 92 54 l41 21 138 -82 c76 -44 174 -102 218 -128 44 -25 90 -53 102 -60 19 -13 39 -3 245 120 122 73 258 154 300 179 l77 46 1 500 0 501 256 154 c141 85 332 200 423 255 l166 100 3 352 2 351 -157 95 c-87 52 -189 114 -226 137 -38 23 -75 44 -83 47 -12 4 -14 -39 -14 -278 l0 -284 -73 -42 c-39 -22 -110 -64 -157 -91 -195 -114 -261 -152 -265 -152 -3 0 -5 125 -5 278 0 261 -1 278 -19 289 -10 6 -99 57 -197 111 -275 153 -276 154 -267 162 4 4 117 73 251 154 l243 146 212 -121 c117 -67 224 -129 239 -138 15 -9 29 -13 33 -10 3 3 2 132 -1 286 l-7 280 -71 40 c-175 98 -482 276 -490 284 -6 5 -17 9 -25 9 -9 0 -162 -86 -341 -191z m-40 -2731 l0 -273 -233 -139 c-205 -122 -235 -137 -258 -129 -24 9 -232 130 -396 230 l-73 44 0 265 c0 145 2 264 4 264 2 0 109 -56 237 -124 l233 -124 110 59 c61 32 170 90 241 128 72 39 131 70 133 71 1 0 2 -123 2 -272z"/>
</g>
<g id="layer102" fill="#5e5f5f" stroke="none">
<path d="M6024 4555 c-16 -39 -2 -43 183 -47 197 -4 222 -10 264 -70 35 -48 38 -133 7 -177 -46 -67 -66 -75 -206 -81 -130 -6 -168 -16 -203 -56 -32 -37 -49 -84 -49 -137 0 -43 6 -63 29 -98 52 -78 70 -84 270 -84 157 0 175 2 185 18 9 15 7 21 -8 33 -15 11 -56 14 -179 14 l-159 0 -33 33 c-58 58 -58 116 0 174 33 33 33 33 130 33 53 0 116 5 140 11 56 14 131 79 156 134 50 109 -11 252 -128 302 -49 20 -391 19 -399 -2z"/>
<path d="M6736 4555 c-9 -25 -7 -718 3 -733 5 -8 17 -12 27 -10 18 3 19 19 19 378 0 375 0 375 -21 378 -13 2 -24 -4 -28 -13z"/>
<path d="M6961 4556 c-6 -7 -9 -20 -5 -29 5 -13 34 -16 182 -19 164 -3 180 -5 218 -26 77 -45 103 -133 62 -212 -37 -72 -79 -90 -211 -90 -124 0 -164 -14 -216 -77 -75 -91 -38 -233 74 -284 56 -26 345 -28 369 -3 9 8 16 17 16 19 0 2 -7 11 -16 19 -13 13 -43 16 -170 16 -119 0 -162 4 -184 15 -55 28 -76 105 -45 165 27 51 50 60 160 60 119 0 161 10 216 53 129 98 116 296 -24 377 l-52 30 -181 0 c-142 0 -184 -3 -193 -14z"/>
<path d="M7816 4555 c-3 -9 -6 -167 -6 -351 l0 -334 -98 0 c-115 0 -145 -15 -106 -54 13 -14 49 -16 239 -16 190 0 226 2 239 16 40 39 9 54 -111 54 l-103 0 -2 348 c-3 345 -3 347 -24 350 -13 2 -24 -4 -28 -13z"/>
<path d="M8270 4550 c-7 -14 -10 -135 -8 -375 3 -303 5 -357 18 -365 21 -13 456 -13 481 0 23 13 25 46 3 54 -9 3 -110 6 -225 6 l-209 0 0 320 0 320 223 2 222 3 0 25 0 25 -247 3 c-239 2 -247 2 -258 -18z"/>
<path d="M8977 4563 c-4 -3 -7 -172 -7 -374 0 -354 1 -369 19 -379 23 -12 21 -15 234 271 138 184 164 231 135 242 -25 9 -48 -15 -184 -198 l-139 -186 -5 313 c-3 172 -7 314 -8 316 -4 5 -39 2 -45 -5z"/>
<path d="M9663 4558 c-4 -7 -10 -147 -13 -311 l-5 -299 -95 128 c-121 163 -125 167 -150 154 -11 -6 -20 -17 -20 -24 0 -16 275 -387 295 -399 8 -4 20 0 29 9 14 13 16 60 16 369 0 194 -3 360 -6 369 -7 19 -39 21 -51 4z"/>
<path d="M9840 4555 c-10 -13 -10 -23 2 -53 15 -35 203 -498 256 -631 28 -67 45 -83 67 -60 7 8 45 95 85 194 40 99 104 258 142 353 38 95 68 180 66 190 -2 10 -12 17 -28 17 -25 0 -25 0 -266 -600 l-16 -39 -38 91 c-21 51 -78 190 -125 310 -48 120 -92 224 -97 231 -14 16 -33 15 -48 -3z"/>
<path d="M10554 4556 c-16 -40 -2 -44 183 -48 196 -4 222 -11 263 -69 46 -64 44 -139 -6 -199 -41 -48 -61 -54 -195 -60 -116 -5 -129 -7 -167 -33 -109 -72 -109 -243 1 -315 40 -27 42 -27 215 -27 158 0 176 2 186 18 9 15 7 21 -8 33 -15 11 -56 14 -177 14 -155 0 -158 0 -188 26 -17 14 -36 43 -42 64 -10 33 -9 44 10 83 12 24 33 49 47 55 14 7 65 12 115 12 123 0 170 13 229 67 117 105 105 264 -29 358 l-43 30 -194 3 c-169 3 -195 1 -200 -12z"/>
<path d="M8354 4205 c-16 -40 0 -45 130 -45 105 0 125 2 130 16 14 36 -11 44 -136 44 -96 0 -120 -3 -124 -15z"/>
</g>
<g id="layer103" fill="#2388c9" stroke="none">
<path d="M3370 4599 c-179 -105 -366 -215 -417 -245 -50 -30 -97 -54 -105 -54 -7 0 -31 11 -53 23 -115 67 -471 272 -623 359 -102 59 -179 97 -188 94 -9 -3 -70 -39 -137 -79 -67 -40 -190 -113 -274 -163 -84 -49 -152 -91 -153 -94 0 -3 106 -66 235 -140 178 -102 232 -137 221 -145 -12 -7 4 -20 67 -55 107 -61 421 -241 425 -245 1 -1 -48 -30 -110 -65 -62 -35 -147 -82 -188 -105 -41 -23 -101 -57 -133 -75 l-58 -32 268 -160 c147 -87 364 -216 480 -286 l213 -127 2 -561 3 -562 240 128 240 128 3 -146 c1 -81 6 -333 10 -559 l7 -413 210 126 c116 69 249 149 297 177 l88 52 0 500 0 501 256 154 c141 85 332 200 423 255 l166 100 3 347 2 347 -82 -48 c-46 -26 -154 -89 -240 -139 -86 -51 -160 -92 -164 -92 -6 0 -226 -126 -314 -181 -57 -35 -171 -99 -176 -99 -2 0 -4 125 -4 278 0 261 -1 278 -19 289 -10 6 -99 57 -197 111 -275 153 -276 154 -267 162 4 4 112 69 238 145 127 76 239 146 250 155 14 12 412 255 482 294 1 1 -30 20 -70 42 -176 99 -483 277 -491 285 -6 5 -17 9 -25 9 -9 0 -162 -86 -341 -191z"/>
<path d="M910 3231 c0 -259 3 -341 13 -349 13 -11 562 -344 735 -446 l102 -60 0 -501 0 -500 78 -47 c42 -26 169 -102 282 -169 113 -67 215 -129 228 -137 l22 -14 0 860 0 860 -202 117 c-112 65 -237 139 -278 165 -120 75 -439 260 -494 288 -28 14 -125 68 -216 122 -219 128 -257 150 -264 150 -3 0 -6 -152 -6 -339z"/>
<path d="M6467 3475 c-351 -59 -662 -293 -821 -617 -76 -154 -106 -274 -113 -448 -11 -276 62 -510 227 -729 112 -148 237 -248 421 -335 149 -71 262 -97 441 -104 337 -12 616 82 837 281 94 85 106 108 106 208 0 76 -3 90 -28 127 -40 62 -116 102 -192 102 -76 0 -121 -21 -203 -93 -127 -111 -265 -158 -472 -160 -151 -2 -204 10 -324 71 -109 56 -191 130 -252 228 -161 259 -129 584 81 803 86 90 153 132 272 174 76 26 102 30 193 30 193 0 338 -61 475 -198 71 -72 145 -180 145 -214 0 -8 -93 -11 -321 -11 -212 0 -335 -4 -360 -11 -84 -26 -159 -126 -159 -215 0 -91 52 -178 128 -216 47 -23 49 -23 529 -26 321 -2 496 1 522 8 61 16 122 68 154 130 28 53 29 59 23 157 -16 291 -118 524 -320 731 -258 266 -627 388 -989 327z"/>
<path d="M9351 3470 c-24 -11 -69 -40 -100 -65 -84 -67 -369 -291 -426 -335 -27 -21 -124 -97 -215 -169 l-165 -130 -5 267 c-5 255 -6 269 -29 315 -53 109 -189 157 -301 106 -56 -25 -86 -53 -113 -104 -22 -40 -22 -40 -25 -965 -2 -648 0 -940 8 -976 13 -61 63 -124 124 -157 40 -22 50 -22 446 -25 233 -2 437 1 480 7 188 25 348 114 475 262 58 68 131 209 150 290 20 86 19 265 -1 348 -35 141 -137 301 -253 395 -62 51 -203 124 -255 133 -66 10 -85 -8 268 269 189 148 212 169 235 218 23 47 28 136 11 182 -46 121 -195 185 -309 134z m-299 -1264 c98 -48 165 -163 155 -263 -10 -99 -85 -197 -175 -229 -27 -10 -112 -13 -314 -14 l-278 0 0 265 0 266 288 -3 c256 -3 291 -5 324 -22z"/>
<path d="M10350 3469 c-211 -54 -380 -188 -480 -380 -74 -142 -103 -353 -61 -444 48 -104 168 -151 293 -113 84 25 148 126 148 235 0 58 20 102 71 158 65 71 108 90 204 90 69 0 86 -4 126 -27 25 -15 62 -45 82 -67 68 -75 67 -66 67 -818 0 -488 3 -680 11 -696 30 -56 96 -121 147 -145 125 -57 263 9 310 147 9 25 12 222 12 720 0 566 -3 698 -15 756 -44 206 -152 369 -318 479 -97 64 -135 81 -242 107 -106 25 -254 25 -355 -2z"/>
<path d="M910 2166 l0 -275 28 -19 c83 -59 462 -280 467 -273 2 5 2 133 -2 285 l-6 277 -234 139 c-128 77 -238 140 -243 140 -6 0 -10 -103 -10 -274z"/>
<path d="M4720 2404 c-30 -19 -133 -81 -228 -137 -113 -67 -174 -109 -178 -122 -2 -11 -3 -140 -2 -286 l3 -266 180 109 c99 60 208 125 243 146 l62 36 0 278 c0 216 -3 278 -12 277 -7 -1 -38 -16 -68 -35z"/>
</g>
<g id="layer104" fill="#50bce7" stroke="none">
<path d="M2265 3794 c-55 -31 -138 -78 -185 -104 -47 -26 -111 -62 -143 -80 l-58 -32 118 -70 c65 -39 279 -167 476 -284 197 -118 364 -214 372 -214 8 0 209 116 447 258 238 143 452 270 475 283 38 23 40 26 24 36 -11 7 -99 57 -197 111 -99 55 -199 111 -224 126 -25 14 -50 26 -56 26 -6 0 -111 -61 -234 -135 -193 -116 -226 -133 -244 -123 -12 6 -118 66 -237 134 -119 68 -220 124 -225 124 -5 0 -54 -25 -109 -56z"/>
</g>


</svg>
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#about" className="page-scroll">
                  SOBRE
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  SERVIÇOS
                </a>
              </li>
              <li>
                <a href="#testimonials" className="page-scroll">
                  CLIENTES
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  CONTATO
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
