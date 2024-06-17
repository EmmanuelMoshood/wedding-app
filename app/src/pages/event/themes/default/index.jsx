export default function {
    return (
        <Container class="wv-event-container">
            <el-main>
                <Header></Header>

                <el-row type="flex" justify="center">
                    <el-col :sm="20" :md="16" class="el-app-welcome-heading">
                        <h2 >We're getting married!</h2>
                        <h3 >Marriage is Beautiful. In each other, we have found Love, Friendship, and Purpose. We look forward to you celebrating with us. You'll never walk alone</h3>
                    </el-col>
                </el-row>

                <el-row type="flex" justify="center">
                    <el-col :sm="20" :md="16">
                        <el-carousel arrow="never" :autoplay="true" class="el-app-welcome-carousel">
                            <el-carousel-item v-for="(image, index) in carouselImages" :key="index">
                                <div class="el-app-welcome-image">
                                    <img :src="image" alt="Ofechukwu and Afolabi" class="grayscale">
                                    <div class="colored">
                                        <img :src="image" alt="Ofechukwu and Afolabi">
                                    </div>
                                </div>
                            </el-carousel-item>
                        </el-carousel>
                     </el-col>
                </el-row> 
            
                <Footer></Footer>
            </el-main>
        </Container>
    )
}