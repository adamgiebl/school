import { CountUp } from "countup.js";
import { tween } from "shifty";
const container = document.getElementById("scroll-element");
const typeface = document.getElementById("typeface");

const hand = document.getElementById("hand");

const countUpOptions = {
  useGrouping: false
};

const tweenArray = [
  {
    x: -20,
    y: 1
  },
  {
    x: -20.648943749999997,
    y: 0.99675528125
  },
  {
    x: -22.1879,
    y: 0.9890605
  },
  {
    x: -23.075974999999985,
    y: 0.9846201250000001
  },
  {
    x: -23.61669375,
    y: 0.98191653125
  },
  {
    x: -24.155900000000003,
    y: 0.9792205
  },
  {
    x: -24.888743750000014,
    y: 0.9755562812499999
  },
  {
    x: -25.715900000000005,
    y: 0.9714205
  },
  {
    x: -26.491100000000003,
    y: 0.9675445
  },
  {
    x: -27.35937499999999,
    y: 0.963203125
  },
  {
    x: -28.462943750000008,
    y: 0.95768528125
  },
  {
    x: -29.274375,
    y: 0.953628125
  },
  {
    x: -30.034774999999996,
    y: 0.949826125
  },
  {
    x: -30.88640000000001,
    y: 0.945568
  },
  {
    x: -31.640000000000008,
    y: 0.9418
  },
  {
    x: -32.390400000000014,
    y: 0.938048
  },
  {
    x: -33.184193750000006,
    y: 0.93407903125
  },
  {
    x: -33.92799375000001,
    y: 0.93036003125
  },
  {
    x: -34.760943749999996,
    y: 0.9261952812500001
  },
  {
    x: -35.63577500000001,
    y: 0.9218211249999999
  },
  {
    x: -36.41469375,
    y: 0.91792653125
  },
  {
    x: -37.0079,
    y: 0.9149605000000001
  },
  {
    x: -37.916399999999996,
    y: 0.910418
  },
  {
    x: -38.504243750000015,
    y: 0.9074787812499999
  },
  {
    x: -39.3596,
    y: 0.9032020000000001
  },
  {
    x: -40.03169375,
    y: 0.89984153125
  },
  {
    x: -40.745493749999994,
    y: 0.89627253125
  },
  {
    x: -41.5004,
    y: 0.892498
  },
  {
    x: -42.25169374999999,
    y: 0.88874153125
  },
  {
    x: -42.95549375,
    y: 0.8852225312499999
  },
  {
    x: -43.69977500000002,
    y: 0.881501125
  },
  {
    x: -45.177499999999995,
    y: 0.8741125000000001
  },
  {
    x: -46.59794375,
    y: 0.86701028125
  },
  {
    x: -47.45219375,
    y: 0.8627390312500001
  },
  {
    x: -48.047193750000005,
    y: 0.8597640312499999
  },
  {
    x: -48.80859375,
    y: 0.85595703125
  },
  {
    x: -49.397993750000005,
    y: 0.85301003125
  },
  {
    x: -50.110400000000006,
    y: 0.849448
  },
  {
    x: -50.77760000000001,
    y: 0.846112
  },
  {
    x: -51.52437499999999,
    y: 0.842378125
  },
  {
    x: -52.184775,
    y: 0.8390761250000001
  },
  {
    x: -52.9239,
    y: 0.8353805
  },
  {
    x: -53.61824375,
    y: 0.83190878125
  },
  {
    x: -54.22790000000001,
    y: 0.8288605
  },
  {
    x: -54.91544375000001,
    y: 0.8254227812499999
  },
  {
    x: -55.599375,
    y: 0.822003125
  },
  {
    x: -56.23977500000001,
    y: 0.818801125
  },
  {
    x: -56.91669374999999,
    y: 0.81541653125
  },
  {
    x: -57.55049375,
    y: 0.8122475312499999
  },
  {
    x: -58.2204,
    y: 0.808898
  },
  {
    x: -58.84759999999999,
    y: 0.8057620000000001
  },
  {
    x: -59.51049375000001,
    y: 0.8024475312499999
  },
  {
    x: -60.16977500000001,
    y: 0.799151125
  },
  {
    x: -60.82544375,
    y: 0.7958727812499999
  },
  {
    x: -61.55397500000001,
    y: 0.7922301249999999
  },
  {
    x: -62.16397500000001,
    y: 0.7891801249999999
  },
  {
    x: -62.73294375,
    y: 0.78633528125
  },
  {
    x: -63.33674375,
    y: 0.7833162812500001
  },
  {
    x: -63.97477500000001,
    y: 0.780126125
  },
  {
    x: -64.60919374999999,
    y: 0.7769540312500001
  },
  {
    x: -65.24000000000001,
    y: 0.7738
  },
  {
    x: -65.86719375,
    y: 0.7706640312499999
  },
  {
    x: -66.4176,
    y: 0.7679119999999999
  },
  {
    x: -67.18344375,
    y: 0.76408278125
  },
  {
    x: -67.72710000000001,
    y: 0.7613645
  },
  {
    x: -68.33984375,
    y: 0.75830078125
  },
  {
    x: -68.87749999999998,
    y: 0.7556125
  },
  {
    x: -69.44789999999999,
    y: 0.7527605
  },
  {
    x: -70.085775,
    y: 0.749571125
  },
  {
    x: -70.61424375000001,
    y: 0.74692878125
  },
  {
    x: -71.209775,
    y: 0.743951125
  },
  {
    x: -71.80169375,
    y: 0.7409915312500001
  },
  {
    x: -72.39,
    y: 0.73805
  },
  {
    x: -72.94040000000001,
    y: 0.735298
  },
  {
    x: -73.52169375,
    y: 0.73239153125
  },
  {
    x: -74.099375,
    y: 0.729503125
  },
  {
    x: -74.639775,
    y: 0.7268011249999999
  },
  {
    x: -75.176975,
    y: 0.724115125
  },
  {
    x: -75.74424375000001,
    y: 0.72127878125
  },
  {
    x: -76.30789999999999,
    y: 0.7184605000000001
  },
  {
    x: -76.86794375,
    y: 0.7156602812499999
  },
  {
    x: -77.39174375,
    y: 0.71304128125
  },
  {
    x: -77.94477499999999,
    y: 0.710276125
  },
  {
    x: -78.49419375,
    y: 0.70752903125
  },
  {
    x: -79.04,
    y: 0.7048
  },
  {
    x: -79.5504,
    y: 0.702248
  },
  {
    x: -80.08919374999999,
    y: 0.69955403125
  },
  {
    x: -80.59299375,
    y: 0.69703503125
  },
  {
    x: -81.15594375,
    y: 0.69422028125
  },
  {
    x: -81.621975,
    y: 0.691890125
  },
  {
    x: -82.14674374999998,
    y: 0.6892662812500001
  },
  {
    x: -82.63734374999999,
    y: 0.6868132812500001
  },
  {
    x: -83.18544374999999,
    y: 0.68407278125
  },
  {
    x: -83.66924375,
    y: 0.68165378125
  },
  {
    x: -84.17977499999999,
    y: 0.6791011250000001
  },
  {
    x: -84.68669375,
    y: 0.67656653125
  },
  {
    x: -85.19,
    y: 0.67405
  },
  {
    x: -85.68969375,
    y: 0.67155153125
  },
  {
    x: -86.15669374999999,
    y: 0.66921653125
  },
  {
    x: -86.62049375000001,
    y: 0.66689753125
  },
  {
    x: -87.109775,
    y: 0.664451125
  },
  {
    x: -87.566975,
    y: 0.662165125
  },
  {
    x: -88.07750000000001,
    y: 0.6596124999999999
  },
  {
    x: -88.55594375,
    y: 0.6572202812500001
  },
  {
    x: -89.00294374999999,
    y: 0.6549852812500001
  },
  {
    x: -89.50199375,
    y: 0.65249003125
  },
  {
    x: -89.94219374999999,
    y: 0.65028903125
  },
  {
    x: -90.351975,
    y: 0.6482401250000001
  },
  {
    x: -90.86699375,
    y: 0.64566503125
  },
  {
    x: -91.29719375,
    y: 0.64351403125
  },
  {
    x: -91.6976,
    y: 0.6415120000000001
  },
  {
    x: -92.14799375000001,
    y: 0.63926003125
  },
  {
    x: -92.594775,
    y: 0.637026125
  },
  {
    x: -93.03794375,
    y: 0.63481028125
  },
  {
    x: -93.45174375,
    y: 0.63274128125
  },
  {
    x: -93.91344375,
    y: 0.63043278125
  },
  {
    x: -94.29509999999999,
    y: 0.6285245
  },
  {
    x: -94.72424375,
    y: 0.62637878125
  },
  {
    x: -95.14977499999999,
    y: 0.624251125
  },
  {
    x: -95.57169375000001,
    y: 0.62214153125
  },
  {
    x: -95.96549375000001,
    y: 0.6201725312499999
  },
  {
    x: -96.38040000000001,
    y: 0.618098
  },
  {
    x: -96.79169375000001,
    y: 0.61604153125
  },
  {
    x: -97.17549375,
    y: 0.61412253125
  },
  {
    x: -97.579775,
    y: 0.612101125
  },
  {
    x: -97.93349375000001,
    y: 0.61033253125
  },
  {
    x: -98.35424375,
    y: 0.60822878125
  },
  {
    x: -98.7479,
    y: 0.6062605
  },
  {
    x: -99.13794375,
    y: 0.60431028125
  },
  {
    x: -99.50174375,
    y: 0.6024912812500001
  },
  {
    x: -99.88477499999999,
    y: 0.600576125
  },
  {
    x: -100.241975,
    y: 0.5987901250000001
  },
  {
    x: -100.61799375,
    y: 0.59691003125
  },
  {
    x: -100.96859375,
    y: 0.5951570312500001
  },
  {
    x: -101.3376,
    y: 0.5933120000000001
  },
  {
    x: -101.6816,
    y: 0.591592
  },
  {
    x: -102.04359375000001,
    y: 0.58978203125
  },
  {
    x: -102.38099375000002,
    y: 0.58809503125
  },
  {
    x: -102.73597500000001,
    y: 0.586320125
  },
  {
    x: -103.1079,
    y: 0.5844605
  },
  {
    x: -103.43509999999999,
    y: 0.5828245000000001
  },
  {
    x: -103.77924374999999,
    y: 0.58110378125
  },
  {
    x: -104.119775,
    y: 0.579401125
  },
  {
    x: -104.436975,
    y: 0.577815125
  },
  {
    x: -104.77049375,
    y: 0.57614753125
  },
  {
    x: -105.1004,
    y: 0.574498
  },
  {
    x: -105.42669375,
    y: 0.5728665312500001
  },
  {
    x: -105.73049375,
    y: 0.57134753125
  },
  {
    x: -106.03109375,
    y: 0.56984453125
  },
  {
    x: -106.34697499999999,
    y: 0.568265125
  },
  {
    x: -106.640975,
    y: 0.5667951250000001
  },
  {
    x: -106.94984375,
    y: 0.5652507812500001
  },
  {
    x: -107.27294375,
    y: 0.5636352812500001
  },
  {
    x: -107.57437499999999,
    y: 0.5621281250000001
  },
  {
    x: -107.85477499999999,
    y: 0.560726125
  },
  {
    x: -108.14919375000001,
    y: 0.55925403125
  },
  {
    x: -108.42299375,
    y: 0.55788503125
  },
  {
    x: -108.7104,
    y: 0.556448
  },
  {
    x: -108.9776,
    y: 0.555112
  },
  {
    x: -109.25799375,
    y: 0.5537100312500001
  },
  {
    x: -109.534775,
    y: 0.552326125
  },
  {
    x: -109.80794374999999,
    y: 0.5509602812500001
  },
  {
    x: -110.0775,
    y: 0.5496125000000001
  },
  {
    x: -110.3279,
    y: 0.5483605
  },
  {
    x: -110.59044375,
    y: 0.54704778125
  },
  {
    x: -110.849375,
    y: 0.5457531250000001
  },
  {
    x: -111.08977499999999,
    y: 0.544551125
  },
  {
    x: -111.34169374999999,
    y: 0.54329153125
  },
  {
    x: -111.560975,
    y: 0.542195125
  },
  {
    x: -111.8204,
    y: 0.540898
  },
  {
    x: -112.0476,
    y: 0.5397620000000001
  },
  {
    x: -112.28549374999999,
    y: 0.53857253125
  },
  {
    x: -112.51977500000001,
    y: 0.5374011249999999
  },
  {
    x: -112.736975,
    y: 0.536315125
  },
  {
    x: -112.96424375,
    y: 0.53517878125
  },
  {
    x: -113.17484375000001,
    y: 0.53412578125
  },
  {
    x: -113.3951,
    y: 0.5330245
  },
  {
    x: -113.5991,
    y: 0.5320045
  },
  {
    x: -113.81234375,
    y: 0.5309382812500001
  },
  {
    x: -114.03419375,
    y: 0.52982903125
  },
  {
    x: -114.24,
    y: 0.5287999999999999
  },
  {
    x: -114.4304,
    y: 0.527848
  },
  {
    x: -114.6176,
    y: 0.526912
  },
  {
    x: -114.81299374999999,
    y: 0.52593503125
  },
  {
    x: -114.99359375,
    y: 0.52503203125
  },
  {
    x: -115.19294375,
    y: 0.52403528125
  },
  {
    x: -115.36674375,
    y: 0.52316628125
  },
  {
    x: -115.5479,
    y: 0.5222605
  },
  {
    x: -115.72544375000001,
    y: 0.52137278125
  },
  {
    x: -115.88924374999999,
    y: 0.5205537812500001
  },
  {
    x: -116.059775,
    y: 0.519701125
  },
  {
    x: -116.22669375000001,
    y: 0.51886653125
  },
  {
    x: -116.39,
    y: 0.51805
  },
  {
    x: -116.54039999999999,
    y: 0.517298
  },
  {
    x: -116.68759999999999,
    y: 0.516562
  },
  {
    x: -116.84049375000001,
    y: 0.51579753125
  },
  {
    x: -116.989775,
    y: 0.515051125
  },
  {
    x: -117.126975,
    y: 0.514365125
  },
  {
    x: -117.30219375,
    y: 0.51348903125
  },
  {
    x: -117.4079,
    y: 0.5129604999999999
  },
  {
    x: -117.54294375,
    y: 0.5122852812500001
  },
  {
    x: -117.66674375,
    y: 0.51166628125
  },
  {
    x: -117.794775,
    y: 0.511026125
  },
  {
    x: -117.91919375,
    y: 0.51040403125
  },
  {
    x: -118.04,
    y: 0.5098
  },
  {
    x: -118.14359375000001,
    y: 0.5092820312499999
  },
  {
    x: -118.26419374999999,
    y: 0.50867903125
  },
  {
    x: -118.36799375000001,
    y: 0.50816003125
  },
  {
    x: -118.47477500000001,
    y: 0.507626125
  },
  {
    x: -118.57794375,
    y: 0.50711028125
  },
  {
    x: -118.6775,
    y: 0.5066125
  },
  {
    x: -118.77344375,
    y: 0.50613278125
  },
  {
    x: -118.8551,
    y: 0.5057245
  },
  {
    x: -118.94937499999999,
    y: 0.5052531250000001
  },
  {
    x: -119.029775,
    y: 0.5048511250000001
  },
  {
    x: -119.10697499999999,
    y: 0.5044651250000001
  },
  {
    x: -119.19,
    y: 0.50405
  },
  {
    x: -119.25609374999999,
    y: 0.50371953125
  },
  {
    x: -119.33169375,
    y: 0.50334153125
  },
  {
    x: -119.3916,
    y: 0.503042
  },
  {
    x: -119.459775,
    y: 0.502701125
  },
  {
    x: -119.51349375000001,
    y: 0.50243253125
  },
  {
    x: -119.57424375000001,
    y: 0.5021287812499999
  },
  {
    x: -119.6279,
    y: 0.5018605
  },
  {
    x: -119.67794375,
    y: 0.5016102812500001
  },
  {
    x: -119.72174375,
    y: 0.50139128125
  },
  {
    x: -119.764775,
    y: 0.501176125
  },
  {
    x: -119.80419375,
    y: 0.50097903125
  },
  {
    x: -119.83799375,
    y: 0.50081003125
  },
  {
    x: -119.86859375,
    y: 0.50065703125
  },
  {
    x: -119.8976,
    y: 0.5005120000000001
  },
  {
    x: -119.92299375,
    y: 0.50038503125
  },
  {
    x: -119.94594375,
    y: 0.50027028125
  },
  {
    x: -119.96197500000001,
    y: 0.500190125
  },
  {
    x: -119.97674375,
    y: 0.50011628125
  },
  {
    x: -119.98844375,
    y: 0.50005778125
  },
  {
    x: -119.99544375,
    y: 0.50002278125
  },
  {
    x: -119.99924375,
    y: 0.50000378125
  },
  {
    x: -120,
    y: 0.5
  }
];

// for desktop
container.addEventListener("scroll", ({ target: { scrollTop } }) => {
  if (tweenArray.length > 0 && tweenArray.length > scrollTop) {
    hand.style.transform = `rotate(${tweenArray[scrollTop].x}deg) scale(${tweenArray[scrollTop].y}) translate3d(-${scrollTop}px, 0, 0)`;
  }
  if (scrollTop > 3915) {
    typeface.classList.add("animated", "bounceInDown");
    typeface.style.visibility = 'visible';
  }
});

// for mobile
window.addEventListener('scroll', () => {
  if (window.scrollY > 3710) {
    typeface.classList.add("animated", "bounceInDown");
    typeface.style.visibility = 'visible';
  }
});

// counting up to a the correct date range
const countUpFrom = new CountUp("from", 1913, countUpOptions);
const countUpTo = new CountUp("to", 1935, countUpOptions);
countUpFrom.start();
countUpTo.start();

// generating inbetween values for desktop hand animation
/*tween({
	from: { x: -20, y: 1 },
	to: { x: -120, y: 0.5 },
	duration: 4000,
	easing: 'easeOutQuad',
	step: state => {
		tweenArray.push({x: state.x, y: state.y});
	}
}).then(
	() => CryptoKeyPair
);*/
