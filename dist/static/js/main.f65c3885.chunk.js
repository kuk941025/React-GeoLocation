(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),l=(n(15),n(1)),i=n(2),s=n(4),u=n(3),d=n(5),m=(n(16),n(8)),p=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={data:[{name:"\uc131\uc2e0\uc5ec\ub300 CGV",lat:37.592526,lon:127.016974},{name:"\ud53c\uc790\ud5db",lat:37.592134,lon:127.017755},{name:"\ud55c\uc131\ub300\uc785\uad6c\uc5ed",lat:37.588491,lon:127.006194},{name:"\ubd80\uc0b0",lat:35.145806,lon:129.028514},{name:"\ub178\ud2b8\ubd81",lat:37.592483099999995,lon:127.0078127}]},n.getDistance=function(t,e){var n=.017453292519943295,a=Math.cos,o=t.latitude,r=t.longitude,c=e.latitude,l=e.longitude,i=.5-a((c-o)*n)/2+a(o*n)*a(c*n)*(1-a((l-r)*n))/2;return 12742*Math.asin(Math.sqrt(i))},n.componentDidUpdate=function(t){var e=n.state.data,a=n.props.coords;t.coords!==a&&a&&(n.props.setCoords(a),e.forEach(function(t){var e=n.getDistance({longitude:127.0152708,latitude:37.5917756},{latitude:t.lat,longitude:t.lon});console.log(t.name+": "+1e3*e+"m")}))},n.componentDidMount=function(){console.log(n.props)},n}return Object(d.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.props,e=t.isGeolocationAvailable,n=t.isGeolocationEnabled,a=t.coords,r=t.cnt;return o.a.createElement("div",null,e?n?a?o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Latitude: ",a.latitude),o.a.createElement("p",null,"Longitude: ",a.longitude)):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,"\uc704\uce58 \uc815\ubcf4\ub97c \ucf1c\uc8fc\uc138\uc694. + ",r,e?"\uad8c\ud55c\uc787\uc74c":"\uad8c\ud55c\uc5c6\uc74c"),this.props.positionError&&o.a.createElement("p",null,this.props.positionError)):o.a.createElement("p",null,"\uad8c\ud55c\uc5c6\uc74c"):o.a.createElement("p",null,"\uc704\uce58\uc815\ubcf4\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \ube0c\ub77c\uc6b0\uc800\uc785\ub2c8\ub2e4."))}}]),e}(a.Component),h=Object(m.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})(p),f=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={timer:null,coords:null,key:(new Date).getTime(),cnt:0},n.handleSetCoords=function(t){n.setState({coords:t})},n.componentDidMount=function(){n.setState({timer:window.setInterval(n.checkCoords,2e3)})},n.checkCoords=function(){n.state.coords?window.clearInterval(n.state.timer):(window.location.reload(),n.setState({key:(new Date).getTime(),cnt:n.state.cnt+1}))},n}return Object(d.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return console.log(this.state),o.a.createElement("div",null,o.a.createElement(h,{setCoords:this.handleSetCoords,key:this.state.key,cnt:this.state.cnt}))}}]),e}(a.Component),g=function(t){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,null))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(21)}},[[9,1,2]]]);
//# sourceMappingURL=main.f65c3885.chunk.js.map