/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HYGRAPH_CMS:
      "https://api-sa-east-1.hygraph.com/v2/clf764i6h6d8c01td9n5xgi9j/master",
    HYGRAPH_TOKEN:
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Nzg3OTc5NDMsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2xmNzY0aTZoNmQ4YzAxdGQ5bjV4Z2k5ai9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMWY4NjA2M2EtZGE0OS00NWU0LThjMTgtNjRhOTM5ZjhhOTkxIiwianRpIjoiY2xmODh5N2hyNzZqajAxdWc2dDJwZm9zOSJ9.Ro07C9aMMIY_EXbOZvtAu3DKYvmv3acGBWJl71vCFIjTwFUcVzK6hscAKwkDq0Q8W8QXt6Wm8lkEuqoW1MmJVVYde64iOITljVmcALLfGptoQlNlZ_l0Yq_PenpKpahnxQkAONgQeyRcwgwTPYh80pWfWRrj1ZNIeqP0upGSco7Z6PYpVwiC645EHwA_bGz_zkpG9zUR3cw3VaU_ebRO-HQ5Jp_z2pxwwBV8Ta28JsEVHY2lFFuuNuuLJCU2g5CM9HbsZxbP47yNj6XdVB9gsnC6iDHxvZHdUQZn4nbMjatd5XsZKJdaWNGC_C_HUNDvopPQFX3RFjsT1h7Mrp-ghCCSIwJjFOa8iEkHI0a1dIR6hyKZEE48Umr9kvPYPSExE4YDBkw-25fsRrXNEnlrk4fBOr_b8iuP5ahTFM4Zgr4_CDbR58CMmtOTzyVzJ8XTeUPkQOvXDU3_3NlKwZ2rJN9Td8GHdvWXRSUh0AD2tEmyJgLQQunHrSAbsh6nK7Mk0B8vtjG4F3k7Wa_dWD9mTekygR-GQnS50bvTIc5rBQgxD0m1oHB_eraMZugVLDXAOiJcGJ7QYAGbsOKb5kCQBG2JrVHKGE_Y1QT0lWRPafwIYTVBhr-7S0KG-UVR754JH4GIudJpWxuGfrayE9op9Z0485W0bGA8C8u33gvJ-wI",
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ["media.graphassets.com"],
  },
}

module.exports = nextConfig
