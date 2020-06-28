window.addEventListener("DOMContentLoaded", async function () {
    async function get(url) {
        const resp = await fetch(url);
        return resp.json();
    }

    document.querySelectorAll(".stack-card").forEach(async function (el) {
        const userId = el.getAttribute("user-id");

        const response = await get(`https://api.stackexchange.com/2.2/users/${userId}?site=stackoverflow`);
        const user = response.items[0];
        const badgeCount = user.badge_counts;

        el.innerHTML = `
            <div style="font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji; border: 1px solid #e1e4e8; border-radius: 6px; background: white; line-height: 1.5; padding: 16px; font-size: 14px; color: #24292e;">
                <div style="display: flex; align-items: center;">
                    <img style="width: 48px; height: 48px; border-radius: 50%" src="${user.profile_image}" alt="Profile image"></img>
                    <div style="display: flex; flex-direction: column; margin-left: 12px">
                        <span style="font-weight: 500; color: #ef8236; font-size: 18px">
                            <a style="text-decoration: none; color: inherit;" target="_blank" href="${user.website_url && user.link}">
                                ${user.display_name}
                            </a>
                        </span>
                        <span style="font-weight: 400; color: #586069; font-size: 12px">
                            ${user.location}
                        </span>
                    </div>
                </div>

                <div style="margin-top: 12px; display: flex; justify-content: space-between; align-items: center; ">
                    <div style="display: flex; flex-direction: column;">
                        <span style="font-size: 10px; font-weight: 500; color: #586069;">
                            REPUTATION
                        </span>
                        <span style="font-weight: 600; color: #211F1F; font-size: 32px; line-height: 1">
                            ${user.reputation}
                        </span>
                    </div>
                
                    <div style="display: flex; flex-direction: column; margin-top: -4px">
                        <span style="font-size: 10px; font-weight: 500; color: #586069;">
                            BADGES
                        </span>
                        <div style="display: flex; flex-direction: row; font-weight: 400; color: #211F1F; font-size: 12px; margin-top: 2px">
                            <span style="min-width: 45px; text-align: center; padding: 2px 0px 2px 0px; background-color: #fff4d1; border: 1px solid #f1b600; border-radius: 5px">
                                ${badgeCount.gold}
                            </span>
                            <span style="min-width: 45px; text-align: center; padding: 2px 0px 2px 0px; background-color: #e8e8e8; margin: 0 4px 0 4px; border: 1px solid #9a9c9f; border-radius: 5px">
                                ${badgeCount.silver}
                            </span>
                            <span style="min-width: 45px; text-align: center; padding: 2px 0px 2px 0px; background-color: #f2e9e1; border: 1px solid #ab825f; border-radius: 5px">
                                ${badgeCount.bronze}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
});
