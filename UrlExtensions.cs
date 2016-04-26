 public static class UrlExtensions
 {
    public static String ToSlug(String url)
    {
        if (string.IsNullOrWhiteSpace(url)) return "";
        url = Regex.Replace(url, "[áàảãạâấầẩẫậăắằẳẵặ]", "a", RegexOptions.Compiled | RegexOptions.IgnoreCase);
        url = Regex.Replace(url, "[đ]", "d", RegexOptions.Compiled | RegexOptions.IgnoreCase);
        url = Regex.Replace(url, "[éèẻẽẹêếềểễệ]", "e", RegexOptions.Compiled | RegexOptions.IgnoreCase);
        url = Regex.Replace(url, "[íìỉĩị]", "i", RegexOptions.Compiled | RegexOptions.IgnoreCase);
        url = Regex.Replace(url, "[óòỏõọôốồổỗộơớờởỡợ]", "o", RegexOptions.Compiled | RegexOptions.IgnoreCase);
        url = Regex.Replace(url, "[ýỳỷỹỵ]", "y", RegexOptions.Compiled | RegexOptions.IgnoreCase);
        url = Regex.Replace(url, "[úùủũụưứừửữự]", "u", RegexOptions.Compiled | RegexOptions.IgnoreCase);
        url = Regex.Replace(url, "\\s+", "-", RegexOptions.Compiled | RegexOptions.IgnoreCase);
        url = Regex.Replace(url, "[^a-z0-9-]", "", RegexOptions.Compiled | RegexOptions.IgnoreCase);
        url = Regex.Replace(url, "[-]+", "-", RegexOptions.Compiled | RegexOptions.IgnoreCase);
        return url.Trim('-', ' ');
    }
}
