jQuery Slug plugin
===========
jQuery Slug plugin makes your titles or url's SEO friendly, suitable for use as hyperlinks, in CMS, blog or etc

jQuery Slug plugin  Example 

<form action="index.html" method="get">
    <label for="title">Title</label><br />
    <input type="text" name="title" id="title" style="width: 400px" /><br />
    <label for="slug">Friendly URL</label><br />
    <input type="text" name="slug" id="slug" style="width: 400px" readonly="readonly" />
</form>

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript" src="jquery.slug.js"></script>

<script type="text/javascript">
    $(function(){
        $('#title').change(function(){
            $("#slug").val($(this).slug());
        });
    });
</script>
