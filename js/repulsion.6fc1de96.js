(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["repulsion"],{"2afb":function(e,t,a){},"6d9a":function(e,t,a){"use strict";var r=a("2afb"),s=a.n(r);s.a},c061:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"repulsion-effect"},[e._m(0),a("vgl-renderer",{ref:"renderer",staticStyle:{height:"70vh"},attrs:{antialias:"",alpha:"","shadow-map-enabled":""}},[a("vgl-scene",[a("vgl-box-geometry",{attrs:{name:"box",width:".5",height:".5",depth:".5"}}),a("vgl-cone-geometry",{attrs:{name:"cone",radius:".3",height:".5","radial-segments":"50"}}),a("vgl-torus-geometry",{attrs:{name:"torus",radius:".3",tube:".12","tubular-segments":"70","radial-segments":200}}),a("vgl-mesh-physical-material",{ref:"material",attrs:{name:"material",color:"#"+[e.phR,e.phG,e.phB].map(function(e){return parseInt(e).toString(16)}).map(function(e){return e.length<2?"0"+e:e}).join("")}}),e.cells.length>0?a("vgl-object3d",{ref:"meshesContainer",attrs:{position:"0, 0, 0"}},e._l(e.cells.flat(),function(e,t){return a("vgl-mesh",{key:t,attrs:{"receive-shadow":"","cast-shadow":"",geometry:e.geometry,material:"material",position:e.positionXYZ,rotation:e.rotation,scale:e.scale}})}),1):e._e(),a("vgl-plane-geometry",{attrs:{name:"floor",width:"100",height:"100"}}),a("vgl-shadow-material",{attrs:{name:"shadowMat",opacity:".3"}}),a("vgl-mesh",{ref:"floorMesh",attrs:{geometry:"floor",material:"shadowMat","receive-shadow":"",rotation:e.shadowFloorRotation,visible:""}}),a("vgl-ambient-light",{attrs:{color:"#"+[e.aR,e.aG,e.aB].map(function(e){return parseInt(e).toString(16)}).map(function(e){return e.length<2?"0"+e:e}).join(""),intensity:e.aIntensity}}),a("vgl-rect-area-light",{attrs:{color:"#"+[e.rR,e.rG,e.rB].map(function(e){return parseInt(e).toString(16)}).map(function(e){return e.length<2?"0"+e:e}).join(""),intensity:e.rIntensity,width:"1024",height:"1024",position:"28, 50, 55"}}),a("vgl-perspective-camera",{ref:"camera",attrs:{name:"camera",position:"18 60 7",fov:"20",aspect:e.width/e.height,near:"0.1",far:"100",rotation:"-1.57"}}),e.showAxes?a("vgl-axes-helper",{attrs:{size:"50"}}):e._e()],1)],1),a("div",{staticClass:"control-panel"},[a("a",{staticClass:"repulsion__link-upper",attrs:{href:"https://github.com/ioanadi/tutorials-website/blob/master/src/views/tutorials/RepulsionEffect.vue"}},[e._v(" Source code  ")]),a("h3",[e._v("Control Panel")]),a("div",{staticClass:"panel__item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.showAxes,expression:"showAxes"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.showAxes)?e._i(e.showAxes,null)>-1:e.showAxes},on:{change:function(t){var a=e.showAxes,r=t.target,s=!!r.checked;if(Array.isArray(a)){var i=null,o=e._i(a,i);r.checked?o<0&&(e.showAxes=a.concat([i])):o>-1&&(e.showAxes=a.slice(0,o).concat(a.slice(o+1)))}else e.showAxes=s}}}),e._v(" \n            "),a("label",{attrs:{for:"checkbox"}},[e._v("Show Axes Helper")])]),a("div",{staticClass:"panel__item"},[a("p",[e._v("Ambient Light Color")]),a("label",[e._v("R  "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.aR,expression:"aR"}],attrs:{type:"range",max:"255"},domProps:{value:e.aR},on:{__r:function(t){e.aR=t.target.value}}})]),e._v(" \n            "),a("label",[e._v("G  "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.aG,expression:"aG"}],attrs:{type:"range",max:"255"},domProps:{value:e.aG},on:{__r:function(t){e.aG=t.target.value}}})]),e._v(" \n            "),a("label",[e._v("B  "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.aB,expression:"aB"}],attrs:{type:"range",max:"255"},domProps:{value:e.aB},on:{__r:function(t){e.aB=t.target.value}}})])]),a("div",{staticClass:"panel__item"},[a("p",[e._v("React Area Light Color")]),a("label",[e._v("R  "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.rR,expression:"rR"}],attrs:{type:"range",max:"255"},domProps:{value:e.rR},on:{__r:function(t){e.rR=t.target.value}}})]),e._v(" \n            "),a("label",[e._v("G  "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.rG,expression:"rG"}],attrs:{type:"range",max:"255"},domProps:{value:e.rG},on:{__r:function(t){e.rG=t.target.value}}})]),e._v(" \n            "),a("label",[e._v("B  "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.rB,expression:"rB"}],attrs:{type:"range",max:"255"},domProps:{value:e.rB},on:{__r:function(t){e.rB=t.target.value}}})])]),a("div",{staticClass:"panel__item"},[a("p",[e._v("Physical Material Color")]),a("label",[e._v("R  "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phR,expression:"phR"}],attrs:{type:"range",max:"255"},domProps:{value:e.phR},on:{__r:function(t){e.phR=t.target.value}}})]),e._v(" \n            "),a("label",[e._v("G  "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phG,expression:"phG"}],attrs:{type:"range",max:"255"},domProps:{value:e.phG},on:{__r:function(t){e.phG=t.target.value}}})]),e._v(" \n            "),a("label",[e._v("B  "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phB,expression:"phB"}],attrs:{type:"range",max:"255"},domProps:{value:e.phB},on:{__r:function(t){e.phB=t.target.value}}})])]),e._m(1)]),a("span",{staticClass:"credits"},[e._v("Photo by Annie Spratt on Unsplash")])],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",{staticClass:"huey-text"},[e._v("Interactive Repulsion Effect "),a("br"),e._v(" With Vue GL")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Design by "),a("a",{attrs:{href:"https://tympanus.net/codrops/2018/12/06/interactive-repulsion-effect-with-three-js/"}},[e._v("Interactive Repulsion Effect with Three.js")])])}],i=a("2b0e"),o=a("5a89"),n=function(e){return e*Math.PI/180},l=function(e,t,a,r){return Math.sqrt(Math.pow(e-a,2)+Math.pow(t-r,2))},u=function(e,t,a){return e+" "+t+" "+a},h=2,c=i["a"].extend({name:"RepulsionEffect",data:function(){return{geometries:["box","cone","torus"],width:window.innerWidth,height:window.innerHeight-3*window.innerHeight/10,mouse3D:{x:0,y:0},shadowFloorRotation:u(-Math.PI/2,0,0),raycaster:new o["Raycaster"],grid:{cols:14,rows:6},cells:[],gutter:h,focusRadius:3*h,rotation:"",defaultY:0,focusedY:10,defaultScale:u(1,1,1),focusedScale:u(1.5,1.5,1.5),focusedCenterScale:u(2.25,2.25,2.25),showAxes:!1,aR:255,aG:255,aB:255,aIntensity:1,rR:255,rG:255,rB:255,rIntensity:1,phR:255,phG:255,phB:255}},computed:{gridWidth:function(){return this.gutter*this.grid.cols},gridHeight:function(){return this.gutter*this.grid.rows}},mounted:function(){this.cells=this.createCells(),this.$refs.material.inst.emissive={r:0,b:0,g:0},this.$refs.material.inst.roughness=.18,this.$refs.material.inst.metalness=.58,this.$refs.renderer.inst.shadowMap.type=o["PCFSoftShadowMap"],window.addEventListener("mousemove",this.onMouseMove,{passive:!0}),requestAnimationFrame(this.animate)},methods:{animate:function(e){e*=.001,this.rotation=u(e,e,e),this.draw(),requestAnimationFrame(this.animate)},createCells:function(){for(var e=[],t=0;t<this.grid.rows;t++){for(var a=[],r=0;r<this.grid.cols;r++){var s=r+r*this.gutter,i=0,o=t+t*this.gutter,n=this.getRandomGeometry(),l={geometry:n,position:{x:s,z:o,y:0},positionXYZ:u(s,i,o),rotation:this.getDefaultGeometryRotation(n),scale:this.defaultScale};a.push(l)}e.push(a)}return e},onMouseMove:function(e){var t=e.clientX,a=e.clientY;this.mouse3D.x=t/this.width*2-1,this.mouse3D.y=-a/this.height*2+1},draw:function(){this.raycaster.setFromCamera(this.mouse3D,this.$refs.camera.inst);var e=this.raycaster.intersectObjects([this.$refs.floorMesh.inst]);if(e.length)for(var t=e[0].point,a=t.x,r=t.z,s=0;s<this.grid.rows;s++)for(var i=0;i<this.grid.cols;i++){var o=this.cells[s][i],n=l(a,r,o.position.x,o.position.z);if(this.isPointInFocusedArea(n)){var h=1-n/this.focusRadius,c=4.5*h<1?1:4.5*h;o.scale=u(c,c,c),o.positionXYZ=u(o.position.x,6*h,o.position.z),o.rotation=this.getFocusedGeometryRotation(o.geometry,3*h)}else o.positionXYZ=u(o.position.x,this.defaultY,o.position.z),o.scale=this.defaultScale,o.rotation=this.getDefaultGeometryRotation(o.geometry)}},getDefaultGeometryRotation:function(e){var t="cone"==e?n(-180):0;return u(0,0,t)},getFocusedGeometryRotation:function(e,t){return u(n(45)*t,n(-90)*t,n(90)*t)},isPointInFocusedArea:function(e){return e<this.focusRadius},getRandomGeometry:function(){return this.geometries[Math.floor(Math.random()*Math.floor(this.geometries.length))]}}}),m=c,p=(a("6d9a"),a("2877")),v=Object(p["a"])(m,r,s,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=repulsion.6fc1de96.js.map