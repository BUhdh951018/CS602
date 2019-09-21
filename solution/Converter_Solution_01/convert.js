function Converter(){
    this.centi=function(x){
        return x*2.54; 
    }
    this.meter=function(x){
        return x*0.0254;
    }
    this.milli=function(x){
        return x*25.4;
    }
}

module.exports=Converter;
