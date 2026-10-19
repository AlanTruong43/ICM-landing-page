# Deploy: S3 + CloudFront

Push to `main` runs `.github/workflows/deploy.yml`: build, sync `dist/` to S3, invalidate CloudFront.

## One-time setup on AWS
1. **S3 bucket** (private, Block Public Access ON, same region as `AWS_REGION`).
2. **ACM certificate** for the domain, in **us-east-1** (required by CloudFront). Validate via DNS.
3. **CloudFront distribution**
   - Origin: the S3 bucket, with Origin Access Control (OAC). Apply the bucket policy CloudFront suggests.
   - Default root object: `index.html`.
   - Alternate domain name + the ACM certificate. Redirect HTTP to HTTPS.
   - Custom error responses: 403 and 404 -> `/404.html`, response code 404 (needs `src/pages/404.astro`).
4. **DNS**: CNAME/ALIAS from the domain to the CloudFront domain.
5. **IAM OIDC role for GitHub** (no access keys):
   - Identity provider `token.actions.githubusercontent.com`, audience `sts.amazonaws.com`.
   - Role trust limited to `repo:AlanTruong43/ICM-landing-page:ref:refs/heads/main`.
   - Permissions: `s3:ListBucket`, `s3:PutObject`, `s3:DeleteObject` on the bucket; `cloudfront:CreateInvalidation` on the distribution.

## GitHub settings (Settings > Secrets and variables > Actions)
| Type | Name | Value |
|---|---|---|
| Secret | `AWS_ROLE_ARN` | ARN of the role above |
| Variable | `AWS_REGION` | e.g. `ap-southeast-1` |
| Variable | `S3_BUCKET` | bucket name |
| Variable | `CLOUDFRONT_DISTRIBUTION_ID` | distribution id |

## Before going public
- Set `site` in `astro.config.mjs` and `Sitemap:` in `public/robots.txt` to the real domain.
- Add `public/og.png` (1200x630).
- Replace the demo success messages on the hero buttons.
- Until launch, consider `noindex` so search engines skip the demo.
