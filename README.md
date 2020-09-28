# Project Information:

1. ThisCreate React App
2. Redux (along witth redux-thunk and redux logger)
3. For CSS I use module and all css I put on src/styles
4. All the assets (such as image) I put on the src/assets
5. All component(.js) I put on src/components

# How to start

<p> For testing purpose please use: npm test</p>
<p> For overview the project please use: npm start</p>

# RESTful Endpoints

GET : /https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp

Response 200:

> Get lists of Editor's Choices, Latest Reviews, and Latest Articles

Request headers: not needed
Request body: not needed

```json
     "editor's choice": [
            {
                    "editor": "annedean",
                    "role": "Associate Editor",
                    "product": {
                      "name": "Y.O.U Makeups",
                      "rating": 4.1,
                      "description": "Rouge Velvet Matte Lip Cream",
                      "image": "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png"
                    },
                    {
                        ...
                    },
     ]


```
