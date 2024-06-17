export const Header = () => (
    <>
        <el-header class="el-app-header">
            <div v-if="showAction" class="el-app-header-action">
                <slot name="actionButton">
                    <a href="https://withjoy.com/esther-and-emmanuel-2024/registry">
                        Gift Registry
                    </a>
                    <router-link to="/invitations/search">
                        <el-button type="text">
                            My Invitation
                        </el-button>
                    </router-link>
                </slot>
            </div>
        </el-header>
        <el-row type="flex" justify="center">
            <el-col :xs="logoSizeXs" :sm="logoSizeSm" :md="logoSize">
                <router-link to="/">
                    <img :src="Logo" alt="Ofechukwu and Afolabi Logo" class="el-app-page-logo">
                </router-link>
            </el-col>
        </el-row>
    </>
)