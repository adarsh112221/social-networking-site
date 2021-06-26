export function getFormBody(params)
{
    let formBody=[];
    for(let property in params)
    {
        let encodeKey=encodeURIComponent(property);
        let encodeValue=encodeURIComponent(params[property]);
        formBody(encodeKey+'='+encodeValue);
    }
    return formBody.join('&');
}