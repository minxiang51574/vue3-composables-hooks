import { StorageSerializers, useStorage } from "@vueuse/core";
import { ElMessage } from "element-plus";
import { computed, reactive, ref } from "vue";

const user = useStorage("user",null,undefined,{
    serializer:StorageSerializers.object
})
export const useUser = () => {
    const loginModel = reactive({
        username:"",
        password:""
    })
    const loginIn = computed(() => user.value?.id);
    const login = async () => {
        user.value = {
            id:1,
            username:loginModel.username
        }
        ElMessage.success("login success")
    }
    const logout = async () => {
        user.value = null
        ElMessage.success("logout success")
    }
    return {
        loginModel,
        user,
        loginIn,
        login,
        logout
    } 
}