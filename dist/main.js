(()=>{"use strict";function n(){var e=parseFloat(document.getElementById("days").value),t=document.getElementById("crop").value,n=parseFloat(document.getElementById("corn-days").value),o=parseFloat(document.getElementById("chili-days").value),a=parseFloat(document.getElementById("spinach-days").value);let i=0,d=0;"corn"===t?(d=n,i=5/d):"chili"===t?(d=o,i=1/d):"spinach"===t&&(d=a,i=2/d);n=i*e*25;document.getElementById("result").textContent=`The estimated yield of ${t} after ${d} days is approximately ${n.toFixed(2)} kilograms.`}function o(){var e=parseFloat(document.getElementById("corn-yield").value),t=parseFloat(document.getElementById("chili-yield").value),n=parseFloat(document.getElementById("spinach-yield").value),e=e*i,t=t*d,n=n*l,o=[e,t,n],a=Math.max(...o),o=["Corn","Chili","Water Spinach"][o.indexOf(a)];document.getElementById("result").textContent=`The profit for corn is RM${e.toFixed(2)}.



The profit for chili is RM${t.toFixed(2)}.
The profit for water spinach is RM${n.toFixed(2)}.

The best crop for maximum profit is ${o} with a profit of RM`+a.toFixed(2)}document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("calculate-profit-button"),t=document.getElementById("calculate-yield-button");e.addEventListener("click",o),t.addEventListener("click",n)});const i=6,d=12,l=3.5})();