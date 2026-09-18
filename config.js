// TradersProp production client configuration.
// Supabase and the Pesapal API are linked through the project environment configuration.
// The Supabase publishable key is safe for browser use when Row Level Security is configured.
window.TRADERSPROP_API_BASE = "https://traderspropdarajampesaintegration.vercel.app";
window.TRADERSPROP_SUPABASE_URL = "https://bcfzfentnhjdsjsfbbzf.supabase.co";
window.TRADERSPROP_SUPABASE_ANON_KEY = "sb_publishable_qTG7KWG8cTzwuofplO2DAQ_e80wRwxA";
// Leave empty so Supabase confirmation links return to the deployed TradersProp site.
// The app supplies the current site origin at runtime.
window.TRADERSPROP_SUPABASE_REDIRECT_URL = "";
