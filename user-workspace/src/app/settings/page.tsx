import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { 
  Bell, 
  Moon,
  Globe,
  Shield,
  HelpCircle,
  LogOut
} from "lucide-react"

interface Setting {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  type: 'switch' | 'button';
  defaultChecked?: boolean;
  value?: string;
}

interface SettingsGroup {
  title: string;
  settings: Setting[];
}

const settingsGroups: SettingsGroup[] = [
  {
    title: "Общие",
    settings: [
      {
        icon: Bell,
        label: "Уведомления",
        type: "switch",
        defaultChecked: true
      },
      {
        icon: Moon,
        label: "Темная тема",
        type: "switch",
        defaultChecked: true
      },
      {
        icon: Globe,
        label: "Язык",
        type: "button",
        value: "Русский"
      }
    ]
  },
  {
    title: "Конфиденциальность",
    settings: [
      {
        icon: Shield,
        label: "Политика конфиденциальности",
        type: "button"
      }
    ]
  },
  {
    title: "Поддержка",
    settings: [
      {
        icon: HelpCircle,
        label: "Помощь",
        type: "button"
      }
    ]
  }
]

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white p-4">
      <h1 className="text-2xl font-semibold mb-6">Настройки</h1>

      {/* Settings Groups */}
      <div className="space-y-6">
        {settingsGroups.map((group, index) => (
          <Card 
            key={index}
            className="neumorphic-card bg-zinc-800/50 border-zinc-700 p-6"
          >
            <h2 className="text-lg font-medium mb-4">{group.title}</h2>
            <div className="space-y-4">
              {group.settings.map((setting, settingIndex) => (
                <div 
                  key={settingIndex}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <setting.icon className="h-5 w-5 text-zinc-400" />
                    <span>{setting.label}</span>
                  </div>
                  {setting.type === "switch" ? (
                    <Switch defaultChecked={setting.defaultChecked} />
                  ) : (
                    <Button 
                      variant="ghost" 
                      className="text-zinc-400 hover:text-white"
                    >
                      {setting.value || ""}
                      <span className="ml-2">›</span>
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Logout Button */}
      <Button 
        variant="ghost" 
        className="w-full mt-6 text-red-500 hover:text-red-400 hover:bg-red-500/10"
      >
        <LogOut className="h-5 w-5 mr-2" />
        Выйти
      </Button>
    </main>
  )
}
