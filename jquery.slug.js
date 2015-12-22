/*jquery.slug v1.0 | author:ducsduyen | license:MIT*/
$.fn.slug = function()
{
    return this.val() 
       .replace(/[áàảãạâấầẩẫậăắằẳẵặ]/ig, 'a')
       .replace(/[đ]/ig, 'd')
       .replace(/[éèẻẽẹêếềểễệ]/ig, 'e')
       .replace(/[íìỉĩị]/ig, 'i')
       .replace(/[óòỏõọôốồổỗộơớờởỡợ]/ig, 'o')
       .replace(/[ýỳỷỹỵ]/ig, 'y')
       .replace(/[úùủũụưứừửữự]/ig, 'u')
	   .replace(/[^a-z0-9-]/ig, '-')
       .replace(/\s+|[-]+/ig, '-')
       .replace(/^[-]+|[-]+$|^\s+|\s+$/ig, '')       
       .toLowerCase();
}
