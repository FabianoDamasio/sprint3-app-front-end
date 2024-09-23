export function cpfMask(v){
    v=v.replace(/\D/g,"")
    v=v.replace(/(\d{3})(\d)/,"$1.$2")
    v=v.replace(/(\d{3})(\d)/,"$1.$2")
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    return v
}

export function cepMask(v){
    v=v.replace(/\D/g,"")
    v=v.replace(/(\d{5})(\d)/,'$1-$2')
    return v
}

export function phoneMask(v) {
    v=v.replace(/\D/g, "");
    v=v.replace(/^0/, "");
    v=v.replace(/(\d{2})(\d)/,"($1) $2")
    v=v.replace(/(\d)(\d{4})$/,"$1-$2")
    return v;
  }