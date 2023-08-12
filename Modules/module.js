export const displayData = [
    {
        'id':'get-started',
        'code': `<div id="get-started" class="display display-flex">
                        <span class="label">Welcome to Pass-El, Your Password Hero</span>
                        <input type="button" name="save" class="btn" value="Get Started">
                 </div>`
    },
    {
        'id':'set-keywords',
        'code': `<div id="set-keywords" class="display display-flex">
                        <span class="label"><p>Enter 10 keywords you want in your password.</p></span>
                       <span class="sub-label"><p>You can add more later</p></span>
                       <div class="input-holder display-flex">
                           <input type="text" name="keywords"     class="input border-none" placeholder="Enter Keyword">
                           <span class="icons"><i class="fa-solid fa-plus"></i></span>
                        </div>
                       <div class="keywords-wrapper">
                            <span class="keywords">hello
                           <span class="icons"><i class="fa-solid fa-minus"></i></span></span>
                
                       </div>

                       <input type="button" name="save" class="btn full-width" value="Save">
                       
                  </div>`
    },
    {
        'id':'set-password',
        'code': ` <div id="set-password" class="display display-flex">
                        <span class="label"><p>You need to set a password to later use to access saved passwords</p></span>
                       <span class="sub-label align-left"><p>Enter Password:</p></span>
                       <input type="password" name="password"     class="input no-border" placeholder="Enter Password">
                       <span class="sub-label align-left"><p>Re-enter Password:</p></span>
                       <input type="password" name="password"     class="input no-border" placeholder="Re-enter Password">
                       <input type="button" name="save" class="btn full-width" value="Save">
                    </div>`
    },
    {
        'id':'main-screen',
        'code': ` <div id="main-screen" class="display display-flex">
                        <input type="button" name="generate-pass" class="btn full-width" value="Create Password">
                        <input type="button" name="view-keywords" class="btn full-width" value="View Keywords">
                        <input type="button" name="view-passwords" class="btn full-width" value="View Passwords">
                    </div>`
    },
    {
        'id':'create-password',
        'code': `<div id="create-password" class="display display-flex">
                        <span class="label"><p>Your Password is:</p></span>
                       <div class="input-holder display-flex">
                           <input type="text" name="keywords"     class="input border-none" readonly>
                           <span class="icons"><i class="fa-regular fa-copy"></i></span>
                        </div>
                        <div class="btn-in-row">
                             <input type="button" name="generate-pass" class="btn half-width" value="New Password">
                            <input type="button" name="save" class="btn half-width" value="Save Password">
                        </div>
                    </div>`
    },
    {
        'id':'authenthenticate',
        'code': `<div id="authenthenticate" class="display display-flex">
                        <span class="label align-left"><p>Enter Password:</p></span>
                        <input type="password" name="password" placeholder="Enter Password" class="input full-width">
                        <input type="button" name="save" class="btn half-width" value="Submit">
                    </div>`
    },
    {
        'id':'view-keywords',
        'code': `<div id="view-keywords" class="display display-flex">
                        <span class="label"><p>Saved Keywords</p></span>
                       <span class="sub-label"><p>You can add or remove them</p></span>
                       <div class="input-holder display-flex">
                           <input type="text" name="keywords"     class="input border-none" placeholder="Enter Keyword">
                           <span class="icons"><i class="fa-solid fa-plus"></i></span>
                        </div>
                       <div class="keywords-wrapper">
                            <span class="keywords">hello
                           <span class="icons"><i class="fa-solid fa-minus"></i></span></span>
                       </div>
                    </div>`
    },
    {
        'id':'view-passwords',
        'code': `<div id="view-passwords" class="display display-flex">
                        <span class="label"><p>Saved Passwords</p></span>
                       <div class="input-holder display-flex">
                           <input type="text" name="keywords"     class="input border-none" placeholder="Enter Keyword">
                           <span class="icons"><i class="fa-solid fa-plus"></i></span>
                        </div>
                       <div class="keywords-wrapper">
                            <span class="keywords"><span>hello</span>
                            <span>******</span>
                           <span class="icons"><i class="fa-solid fa-minus"></i></span></span>
                       </div>
                    </div>`
    },
    {
        'id':'settings',
        'code': `<div id="settings" class="display display-flex">
                        <input type="button" name="reset" class="btn full-width" value="Change Password">
                        <input type="button" name="clear" class="btn full-width" value="Clear Existing Passwords">
                        <input type="button" name="mode" class="btn full-width" value="Dark Mode">
                    </div>`
    },
]
