import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(['/', '/contact(.*)', '/sign-in(.*)', '/sign-up(.*)', '/api/webhook', '/question/:id', '/tags', 'tags/:id', '/profile/:id','/community', '/jobs'])

export default clerkMiddleware(async (auth, req) => {
 if (isPublicRoute(req)) return // if it's a public route, do nothing
 await auth.protect() // for any other route, require auth
})

export const config = {
 matcher: [
 '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
 '/(api|trpc)(.*)',
 ],
}