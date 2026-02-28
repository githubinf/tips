import { motion } from "motion/react";
import { CheckCircle2, XCircle, ShieldCheck, ArrowRight, Star, Quote, Mail, Target, Award, BookOpen, TrendingUp, Users, Zap, Clock, Lock } from "lucide-react";

export default function SalesPage() {
  return (
    <div className="min-h-screen selection:bg-brand-orange/30">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif text-xl font-bold text-brand-blue-dark">
            Tips de Marketing para Afiliados
          </div>
          <button 
            type="button"
            onClick={() => document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-brand-orange hover:bg-brand-orange-dark text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-orange/20 cursor-pointer"
          >
            Obtener mi copia
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Hero Section */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue-dark/5 text-brand-blue-dark text-sm font-semibold tracking-wider uppercase mb-6">
                Nueva Publicación Exclusiva
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-8 text-balance">
                El Secreto Que Nadie Te Cuenta Sobre el Marketing de Afiliados
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-light italic mb-8 leading-relaxed">
                "Y por qué este conocimiento cambiará el rumbo de tu negocio digital para siempre."
              </p>
            </div>
            <div className="w-full md:w-2/5 shrink-0">
              <img 
                src="https://i.ibb.co/JWgtmkq3/5-tips-de-marketing-para-afiliados-ebook.png" 
                alt="Portada del libro Tips de Marketing para Afiliados" 
                className="w-full h-auto drop-shadow-2xl transform hover:rotate-2 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </section>

        {/* Introduction */}
        <article className="prose prose-slate prose-lg max-w-none">
          <div className="space-y-8 text-slate-800 leading-relaxed">
            <p className="text-2xl font-serif italic text-brand-blue-dark border-l-4 border-brand-orange pl-6 my-12">
              Querido amigo, amiga:
            </p>

            <p>
              ¿Llevas meses —o incluso años— intentando generar ingresos promocionando productos a través de la red?
            </p>

            <p>
              ¿Has probado decenas de métodos, cursos y supuestos "trucos infalibles" que prometían hacerte próspero en apenas siete días?
            </p>

            <p>
              ¿Y todavía te despiertas cada mañana revisando tus estadísticas... solo para descubrir que apenas has conseguido unas pocas ventas, o quizás ninguna?
            </p>

            <p className="font-medium text-slate-900">
              Si es así, tengo algo de suma importancia que comunicarte:
            </p>

            <p className="text-3xl font-serif text-brand-blue-dark text-center py-8">
              No eres tú. El problema es el sistema que te han vendido.
            </p>

            <p>
              Durante años, el marketing de afiliados ha sido presentado como el "atajo mágico" hacia la libertad financiera. Nos han bombardeado con imágenes de personas trabajando desde playas exóticas, con frases simplistas como: "Pega enlaces, gana comisiones, vive sin preocupaciones".
            </p>

            <p>
              Suena idílico, ¿verdad? Pero la realidad es drásticamente diferente.
            </p>

            <h2 className="text-3xl font-serif text-brand-blue-dark mt-16 mb-8">
              La cruda verdad que el mercado prefiere ocultar
            </h2>

            <p>
              El panorama digital actual está saturado de promociones vacías. Nos encontramos con bitácoras que solo existen para colocar enlaces sin criterio alguno, canales de vídeo donde lo único que importa es que el espectador haga clic en la descripción, y estrategias copiadas y pegadas que funcionaron hace un lustro, pero que hoy solo generan desconfianza y rechazo.
            </p>

            <p>
              La mayoría de los emprendedores digitales se estrellan contra un muro invisible. Generan tráfico, sí, pero no consiguen conversiones. Crean contenido, pero no logran establecer autoridad. Trabajan horas infinitas, pero los ingresos simplemente no llegan.
            </p>

            <p className="font-semibold">
              ¿Y sabes cuál es el verdadero núcleo del problema?
            </p>

            <p>
              Que nadie te ha explicado cómo funciona este modelo de negocio de verdad. Te han dado recetas sin explicarte los ingredientes. Te han vendido atajos sin mostrarte el mapa completo. Te han hablado de tácticas aisladas cuando lo que realmente necesitas es un sistema integral.
            </p>

            <p>
              El marketing de afiliados no se trata de "vender cosas". Se trata de <strong>resolver problemas</strong> para una audiencia específica mediante la recomendación honesta de soluciones que tú mismo validarías.
            </p>

            <h2 className="text-3xl font-serif text-brand-blue-dark mt-16 mb-8">
              Por qué este libro marca un antes y un después
            </h2>

            <p>
              Mi nombre es Francisco González. Y quiero ser totalmente transparente contigo: no soy un gurú del marketing con un título de una universidad de élite, ni un supuesto "experto" que afirma haber facturado millones antes de cumplir los veinticinco años.
            </p>

            <p>
              Soy alguien como tú. Alguien que comenzó desde el absoluto cero, sin conocimientos técnicos, sin contactos influyentes y con un presupuesto inexistente.
            </p>

            <p>
              He pasado noches en vela analizando métricas, probando estrategias, viendo qué funciona y qué es pura pérdida de tiempo. He cometido cientos de errores para poder escribir este libro y ahorrarte a ti el dolor de cometerlos.
            </p>

            <p>
              Después de años de experimentación, de campañas exitosas y de fracasos sonoros, he llegado a una conclusión ineludible:
            </p>

            <p className="text-2xl font-serif text-brand-orange-dark text-center py-6 italic">
              "El marketing de afiliados no es una carrera de velocidad. Es un maratón de resistencia."
            </p>

            <p>
              Y para triunfar en este maratón no necesitas trucos de magia. Necesitas un sistema ético, replicable y centrado en el valor humano. Eso es exactamente lo que he plasmado en <strong>"Tips de Marketing para Afiliados"</strong>.
            </p>

            <p>
              Este no es otro manual de consejos sueltos que leerás este fin de semana y olvidarás el lunes. Es la hoja de ruta completa que te guiará desde los cimientos hasta la construcción de un negocio rentable, ético y duradero.
            </p>

            <h2 className="text-3xl font-serif text-brand-blue-dark mt-16 mb-8">
              Lo que NO encontrarás en estas páginas
            </h2>

            <p>
              Antes de profundizar en lo que vas a descubrir, permíteme ser honesto sobre lo que NO vas a encontrar aquí. Si buscas alguna de estas cosas, te sugiero que cierres esta página ahora mismo:
            </p>

            <ul className="list-none space-y-4 my-8">
              <li className="flex items-start gap-3">
                <XCircle className="text-red-500 shrink-0 mt-1" size={20} />
                <span><strong>Promesas de ingresos pasivos en siete días:</strong> Simplemente porque eso no existe en el mundo real del emprendimiento serio.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="text-red-500 shrink-0 mt-1" size={20} />
                <span><strong>Atajos que violan términos de servicio:</strong> No te enseñaré nada que pueda poner en riesgo tus cuentas en buscadores o redes sociales.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="text-red-500 shrink-0 mt-1" size={20} />
                <span><strong>Estrategias manipuladoras o engañosas:</strong> Tu reputación es tu activo más valioso. No la sacrificaremos por una comisión rápida.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="text-red-500 shrink-0 mt-1" size={20} />
                <span><strong>Fórmulas mágicas sin esfuerzo:</strong> Construir un negocio requiere trabajo, dedicación y paciencia.</span>
              </li>
            </ul>

            <p>
              Pero si estás harto de soluciones milagrosas y buscas un camino real, sólido y sostenible... entonces, sigue leyendo. Esto ha sido escrito pensando en ti.
            </p>

            <h2 className="text-4xl font-serif text-brand-blue-dark mt-24 mb-12 text-center">
              Tu Sistema Completo: Un Viaje de Trece Capítulos
            </h2>

            <div className="space-y-16">
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm editorial-shadow">
                <h3 className="text-2xl font-serif text-brand-blue-dark mb-4">Capítulo 1: Comprender el Marketing de Afiliados en Profundidad</h3>
                <p>
                  Olvida todo lo que crees saber. Aquí comenzamos desde los cimientos más profundos. Descubrirás cómo funciona realmente este modelo, quiénes son los actores principales y por qué la ética no es un obstáculo, sino el motor más potente para tu crecimiento a largo plazo. Aprenderás los diferentes modelos de comisiones y las herramientas esenciales que necesitas desde el primer día para no perder el rumbo.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm editorial-shadow">
                <h3 className="text-2xl font-serif text-brand-blue-dark mb-4">Capítulo 2: Investigación Estratégica de Mercado</h3>
                <p>
                  ¿Sabes cuál es el error más común de los principiantes? Promocionar productos que a ellos les gustan, en lugar de soluciones que su audiencia necesita desesperadamente. Aquí te enseño a investigar como un auténtico detective digital. Aprenderás a identificar nichos con demanda real, a analizar a tu competencia sin caer en la imitación y a descubrir qué está buscando tu audiencia antes incluso de que ellos mismos lo sepan.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm editorial-shadow">
                <h3 className="text-2xl font-serif text-brand-blue-dark mb-4">Capítulo 3: Construyendo una Marca Personal Poderosa</h3>
                <p>
                  En un mundo saturado de personas promocionando los mismos productos, tu marca personal es tu único elemento diferenciador. Descubrirás cómo definir tu propósito, tu voz única y tu identidad visual. Te enseñaré cómo pasar de ser "uno más" a convertirte en la referencia de autoridad en tu nicho. Recuerda: la gente no compra por tus enlaces; compra por la confianza que has sabido construir.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm editorial-shadow">
                <h3 className="text-2xl font-serif text-brand-blue-dark mb-4">Capítulo 4: Selección Inteligente de Productos y Servicios</h3>
                <p>
                  Este capítulo te ahorrará cientos de dólares en promociones que no convierten. Aprenderás a evaluar un programa de afiliados mucho más allá de la comisión que ofrece. Te enseñaré a identificar productos de alta calidad que realmente aporten valor a tu audiencia y a diversificar tu cartera para no depender nunca de una única fuente de ingresos.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm editorial-shadow">
                <h3 className="text-2xl font-serif text-brand-blue-dark mb-4">Capítulo 5: Estrategias de Contenido que Generan Conversión</h3>
                <p>
                  Se dice que el contenido es el rey, pero no cualquier contenido sirve. Aquí aprenderás a crear las piezas que realmente impulsan las ventas: artículos educativos, vídeos demostrativos y comparativas detalladas que ayudan al usuario a tomar una decisión informada. Aprenderás a integrar tus recomendaciones de forma natural, sin parecer un vendedor agresivo, y a optimizar cada pieza para los motores de búsqueda.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm editorial-shadow">
                <h3 className="text-2xl font-serif text-brand-blue-dark mb-4">Capítulo 6: Maximizando la Conversión de Afiliados</h3>
                <p>
                  Puedes tener el mejor contenido y el tráfico más cualificado, pero si tu página no convierte, todo el esfuerzo es en vano. Descubrirás los secretos de la optimización: desde la velocidad de carga hasta el diseño de llamadas a la acción que resultan irresistibles. Aprenderás a realizar pruebas comparativas para mejorar constantemente y a utilizar testimonios para multiplicar la confianza de tus visitantes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm editorial-shadow">
                <h3 className="text-2xl font-serif text-brand-blue-dark mb-4">Capítulo 7: La Importancia de las Redes Sociales</h3>
                <p>
                  No se trata de estar en todas las plataformas, sino de estar donde se encuentra tu audiencia. Te enseñaré a identificar los canales adecuados para tu nicho, a diseñar perfiles que atraigan y a crear contenido específico para cada red. Además, descubrirás cómo utilizar la publicidad pagada de forma inteligente y cómo colaborar con otros creadores para multiplicar tu alcance de manera orgánica.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm editorial-shadow">
                <h3 className="text-2xl font-serif text-brand-blue-dark mb-4">Capítulo 8: Correo Electrónico y Automatización</h3>
                <p>
                  Tu lista de suscriptores es el único activo digital que realmente te pertenece. Las redes sociales pueden cambiar sus reglas o cerrar tu cuenta mañana, pero tu lista es tuya. Aprenderás a construir una base de datos de calidad, a crear secuencias automatizadas que nutran la relación con tu audiencia y a vender de forma elegante a través del correo electrónico, construyendo vínculos que duren años.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm editorial-shadow">
                <h3 className="text-2xl font-serif text-brand-blue-dark mb-4">Capítulo 9: Colaboraciones Estratégicas y Alianzas</h3>
                <p>
                  Este camino no tiene por qué ser solitario. Las alianzas estratégicas son el atajo más efectivo hacia el crecimiento real. Te enseñaré a identificar socios potenciales, a establecer acuerdos beneficiosos para ambas partes y a gestionar colaboraciones que generen ingresos constantes durante mucho tiempo.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm editorial-shadow">
                <h3 className="text-2xl font-serif text-brand-blue-dark mb-4">Capítulo 10: Analítica y Optimización Constante</h3>
                <p>
                  Sin datos, solo eres una persona con opiniones. Con datos, eres un estratega. Descubrirás las métricas que realmente importan, cómo configurar herramientas de análisis gratuitas y cómo interpretar los números para tomar decisiones inteligentes. Porque lo que no se mide, simplemente no se puede mejorar.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm editorial-shadow">
                <h3 className="text-2xl font-serif text-brand-blue-dark mb-4">Capítulo 11: Adaptándose a las Tendencias Cambiantes</h3>
                <p>
                  El entorno digital evoluciona cada día. Lo que funcionaba ayer puede quedar obsoleto mañana. Aquí te enseño a mantenerte ágil, a identificar tendencias emergentes antes que tu competencia y a pivotar cuando sea necesario sin perder tu esencia ni tus valores fundamentales.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm editorial-shadow">
                <h3 className="text-2xl font-serif text-brand-blue-dark mb-4">Capítulo 12: Manteniendo la Pasión y la Persistencia</h3>
                <p>
                  Este es quizás el capítulo más vital. El conocimiento sin acción es solo ruido, y la acción sin motivación no se sostiene en el tiempo. Hablaremos de cómo superar los obstáculos mentales, cómo mantener el enfoque en los meses de pocos resultados y cómo construir un negocio que te brinde libertad sin agotarte en el proceso.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm editorial-shadow">
                <h3 className="text-2xl font-serif text-brand-blue-dark mb-4">Capítulo 13: La Lista de Verificación del Afiliado Ético</h3>
                <p>
                  Trescientos pasos concretos, verificables y organizados por fases. Desde la mentalidad inicial hasta la consolidación de tu legado digital. No es un simple listado de consejos; es tu hoja de ruta ejecutable. Marca cada acción al completarla y observa cómo tu negocio florece paso a paso.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif text-brand-blue-dark mt-16 mb-8">
              La Psicología del Consumidor Moderno: Por qué el modelo tradicional ha muerto
            </h2>

            <p>
              Para entender por qué necesitas este sistema, primero debemos comprender cómo ha cambiado la mente de las personas que navegan por la red. Hace una década, bastaba con un anuncio llamativo y una promesa audaz para captar la atención. Hoy, el consumidor medio está "blindado" contra la publicidad convencional.
            </p>

            <p>
              Existe un fenómeno conocido como "ceguera publicitaria". El cerebro humano ha aprendido a ignorar automáticamente cualquier elemento que parezca un anuncio. Pero hay algo que el cerebro nunca ignora: <strong>la ayuda genuina</strong>.
            </p>

            <p>
              Cuando alguien busca una solución a un problema —ya sea cómo bajar de peso, cómo invertir sus ahorros o cómo aprender un nuevo idioma—, no está buscando que le vendan algo. Está buscando a alguien en quien confiar. Alguien que le diga: "Entiendo por lo que estás pasando, yo estuve ahí, y esto es lo que realmente funciona".
            </p>

            <p>
              En este libro, profundizamos en la neurociencia de la confianza. Descubrirás cómo activar los disparadores mentales de la autoridad sin necesidad de recurrir a la manipulación. Aprenderás que la venta no es el final del proceso, sino la consecuencia natural de haber aportado valor previo.
            </p>

            <h2 className="text-3xl font-serif text-brand-blue-dark mt-16 mb-8">
              Los Tres Pilares de la Autoridad Sostenible
            </h2>

            <p>
              La mayoría de los cursos de mercadeo de afiliados se centran únicamente en el tráfico. Te dicen cómo conseguir visitas, pero no cómo convertir esas visitas en una comunidad leal. Mi sistema se apoya en tres pilares fundamentales que garantizan la longevidad de tu negocio:
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-12">
              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-brand-blue-dark mb-2">1. Contenido de Valor Real</h4>
                <p className="text-sm text-slate-600">No se trata de publicar por publicar. Cada pieza de contenido debe resolver una duda, aliviar un dolor o enseñar una habilidad. Si tu contenido no ayuda, es solo ruido digital.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-brand-blue-dark mb-2">2. Consistencia Estratégica</h4>
                <p className="text-sm text-slate-600">La confianza se construye con el tiempo. Te enseñaré a crear un calendario editorial que puedas mantener sin quemarte, asegurando que tu audiencia siempre sepa que puede contar contigo.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-brand-blue-dark mb-2">3. Carácter e Integridad</h4>
                <p className="text-sm text-slate-600">En un mercado lleno de fachadas, la autenticidad es tu mayor ventaja competitiva. Aprenderás a mostrar tu verdadera personalidad y a defender tus valores, lo que atraerá a las personas adecuadas.</p>
              </div>
            </div>

            <h2 className="text-3xl font-serif text-brand-blue-dark mt-16 mb-8">
              El Coste Oculto del Marketing Poco Ético
            </h2>

            <p>
              Muchos emprendedores caen en la tentación de utilizar tácticas "grises" para conseguir comisiones rápidas. Promocionan productos de baja calidad solo porque la comisión es alta, utilizan títulos engañosos para conseguir clics o mienten sobre los resultados que se pueden obtener.
            </p>

            <p>
              A corto plazo, esto puede generar algunos dólares. Pero a largo plazo, el coste es devastador:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Pérdida de reputación:</strong> Una vez que pierdes la confianza de tu audiencia, es casi imposible recuperarla.</li>
              <li><strong>Riesgo de baneo:</strong> Las grandes plataformas son cada vez más estrictas con las prácticas engañosas. Un solo error puede borrar años de trabajo.</li>
              <li><strong>Estrés constante:</strong> Vivir intentando "engañar al sistema" es agotador y poco gratificante.</li>
            </ul>

            <p>
              Mi enfoque es diferente. Te enseño a construir un activo que crezca en valor con el tiempo. Un negocio del que te sientas orgulloso de hablar con tus amigos y familiares. Un legado digital que genere ingresos porque realmente estás haciendo del mundo un lugar un poco mejor para tu audiencia.
            </p>

            <h2 className="text-3xl font-serif text-brand-blue-dark mt-16 mb-8">
              Análisis Detallado de la Lista de Verificación de 300 Acciones
            </h2>

            <p>
              Este es, sin duda, el componente más práctico del libro. No quería que terminaras la lectura y te preguntaras: "¿Y ahora qué?". Por eso, diseñé esta lista exhaustiva dividida en cinco fases críticas:
            </p>

            <div className="space-y-6 my-12">
              <div className="flex gap-4">
                <div className="bg-brand-orange text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">F1</div>
                <div>
                  <h4 className="font-bold">Fase de Cimentación (Acciones 1-60)</h4>
                  <p className="text-slate-600">Configuración técnica, elección de nicho, definición de avatar de cliente y establecimiento de objetivos financieros realistas.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-brand-orange text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">F2</div>
                <div>
                  <h4 className="font-bold">Fase de Creación de Autoridad (Acciones 61-120)</h4>
                  <p className="text-slate-600">Desarrollo de los primeros 10 pilares de contenido, configuración de la marca personal y lanzamiento de los canales principales.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-brand-orange text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">F3</div>
                <div>
                  <h4 className="font-bold">Fase de Atracción y Captación (Acciones 121-180)</h4>
                  <p className="text-slate-600">Estrategias de posicionamiento en buscadores, mercadeo en redes sociales y construcción de la lista de correo electrónico.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-brand-orange text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">F4</div>
                <div>
                  <h4 className="font-bold">Fase de Conversión y Venta (Acciones 181-240)</h4>
                  <p className="text-slate-600">Optimización de páginas de aterrizaje, redacción persuasiva ética y gestión de campañas de recomendación.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-brand-orange text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">F5</div>
                <div>
                  <h4 className="font-bold">Fase de Escalamiento y Automatización (Acciones 241-300)</h4>
                  <p className="text-slate-600">Análisis avanzado de datos, creación de sistemas delegables y expansión a nuevos mercados o productos.</p>
                </div>
              </div>
            </div>

            <p>
              Cada acción ha sido probada personalmente por mí. No hay relleno. Cada paso tiene un propósito claro en la construcción de tu imperio de afiliados.
            </p>

            <h2 className="text-3xl font-serif text-brand-blue-dark mt-16 mb-8">
              Tu Hoja de Ruta para los Primeros 90 Días
            </h2>

            <p>
              Sé que empezar puede ser abrumador. Por eso, dentro del libro incluyo un plan de acción detallado para tus primeros tres meses:
            </p>

            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden my-12">
              <div className="bg-brand-blue-dark text-white p-4 font-bold text-center">Plan de Acción: Primer Trimestre</div>
              <div className="p-6 space-y-4">
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-brand-orange font-bold">Mes 1: Claridad y Estructura.</span> Te centrarás en entender a tu audiencia y configurar tu plataforma. Al final de este mes, tendrás una base sólida y tus primeros contenidos publicados.
                </div>
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-brand-orange font-bold">Mes 2: Visibilidad y Conexión.</span> Empezarás a atraer tráfico cualificado y a construir tu lista de suscriptores. Aprenderás a interactuar con tu comunidad y a entender sus necesidades reales.
                </div>
                <div>
                  <span className="text-brand-orange font-bold">Mes 3: Optimización y Resultados.</span> Realizarás tus primeras recomendaciones estratégicas y analizarás los resultados para ajustar tu enfoque. Es aquí donde la magia de la conversión empieza a suceder.
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-serif text-brand-blue-dark mt-16 mb-8">
              La Filosofía de la "Venta sin Vender"
            </h2>

            <p>
              ¿Alguna vez has sentido rechazo al entrar en una tienda y que un vendedor te persiga intentando convencerte de comprar algo que no necesitas? Esa es la sensación que muchos afiliados provocan en la red.
            </p>

            <p>
              En este libro, te enseño la filosofía de la <strong>Recomendación Basada en el Servicio</strong>. Descubrirás que cuando tu enfoque principal es ayudar al usuario a tomar la mejor decisión para ÉL (incluso si eso significa no comprar el producto que promocionas en ese momento), construyes una lealtad inquebrantable.
            </p>

            <p>
              Esa lealtad se traduce en ventas recurrentes. Tus seguidores no solo comprarán lo que recomiendes hoy, sino que acudirán a ti cada vez que necesiten una solución en el futuro. Te conviertes en su asesor de confianza, no en un simple anunciante.
            </p>

            <h2 className="text-3xl font-serif text-brand-blue-dark mt-16 mb-8">
              Comparativa: El Camino del Afiliado Común vs. El Afiliado de Autoridad
            </h2>

            <div className="overflow-x-auto my-12">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="p-4 border border-slate-200">Característica</th>
                    <th className="p-4 border border-slate-200">Afiliado Común (Táctico)</th>
                    <th className="p-4 border border-slate-200 text-brand-blue-dark">Afiliado de Autoridad (Estratégico)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border border-slate-200 font-bold">Enfoque</td>
                    <td className="p-4 border border-slate-200">Comisión rápida</td>
                    <td className="p-4 border border-slate-200">Relación a largo plazo</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-slate-200 font-bold">Contenido</td>
                    <td className="p-4 border border-slate-200">Copiado o superficial</td>
                    <td className="p-4 border border-slate-200">Original, profundo y útil</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-slate-200 font-bold">Tráfico</td>
                    <td className="p-4 border border-slate-200">Dependiente de anuncios</td>
                    <td className="p-4 border border-slate-200">Orgánico y multicanal</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-slate-200 font-bold">Confianza</td>
                    <td className="p-4 border border-slate-200">Baja / Inexistente</td>
                    <td className="p-4 border border-slate-200">Muy alta / Referente</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-slate-200 font-bold">Sostenibilidad</td>
                    <td className="p-4 border border-slate-200">Frágil ante cambios</td>
                    <td className="p-4 border border-slate-200">Robusta y creciente</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              ¿En qué lado de la tabla quieres estar tú dentro de seis meses? La elección que tomes hoy determinará tu posición en el mercado del mañana.
            </p>

            <h2 className="text-3xl font-serif text-brand-blue-dark mt-16 mb-8">
              El Valor Real de esta Inversión
            </h2>

            <p>
              A menudo me preguntan por qué vendo este conocimiento por solo $9,99 cuando otros cobran cientos de dólares por información mucho menos valiosa. La respuesta es sencilla: quiero democratizar el acceso a una formación de calidad y ética.
            </p>

            <p>
              Creo firmemente que si más personas aplicaran estos principios, la red sería un lugar mejor. Habría menos ruido, menos engaños y más valor real. Y al final, eso nos beneficia a todos los que trabajamos de forma honesta en este sector.
            </p>

            <p>
              Pero no te equivoques por el precio. El valor que contiene este libro es inmenso. Si aplicas solo el 10% de lo que enseño, los resultados superarán con creces el coste de esta pequeña inversión.
            </p>

            <h2 className="text-3xl font-serif text-brand-blue-dark mt-16 mb-8">
              La Evolución del Afiliado: De Cazador a Jardinero
            </h2>

            <p>
              En los inicios del marketing digital, el afiliado se comportaba como un cazador. Su objetivo era disparar anuncios a diestra y siniestra, capturar la atención por un instante y conseguir la venta antes de que la presa escapara. Era un modelo basado en la interrupción y la fuerza bruta.
            </p>

            <p>
              Hoy, ese modelo es ineficiente y costoso. El afiliado moderno debe comportarse como un jardinero. Su labor consiste en preparar el terreno (elegir el nicho), plantar las semillas (crear contenido), regar las plantas (nutrir la relación con la audiencia) y esperar pacientemente a que los frutos maduren (las conversiones).
            </p>

            <p>
              Un jardín bien cuidado produce frutos año tras año, de forma sostenible y con un esfuerzo decreciente. Una cacería, en cambio, requiere empezar de cero cada mañana. En este libro, te enseño a dejar de cazar y a empezar a cultivar tu propio ecosistema digital.
            </p>

            <h2 className="text-3xl font-serif text-brand-blue-dark mt-16 mb-8">
              El Poder de la Comunidad en la Era de la Inteligencia Artificial
            </h2>

            <p>
              Estamos viviendo una revolución tecnológica sin precedentes. La inteligencia artificial puede generar textos, imágenes y vídeos en segundos. Muchos temen que esto acabe con el trabajo del afiliado. Yo creo exactamente lo contrario.
            </p>

            <p>
              Cuanto más contenido generado por máquinas inunde la red, más valor tendrá la <strong>conexión humana real</strong>. La gente buscará opiniones de personas en las que confíe, personas con experiencias reales, con cicatrices y con éxitos verificables.
            </p>

            <p>
              Este libro te prepara para esta nueva era. Te enseña a utilizar la tecnología como una herramienta de eficiencia, pero a mantener tu humanidad como tu principal ventaja competitiva. No competiremos en volumen de contenido, competiremos en profundidad de conexión.
            </p>

            <h2 className="text-3xl font-serif text-brand-blue-dark mt-16 mb-8">
              Ejemplos Concretos de la Lista de Verificación
            </h2>

            <p>
              Para que entiendas la profundidad de la lista de trescientas acciones, permíteme compartirte tres ejemplos de lo que encontrarás en ella:
            </p>

            <ul className="list-none space-y-6 my-8">
              <li className="bg-white p-6 rounded-xl border-l-4 border-brand-orange shadow-sm">
                <span className="font-bold block mb-2 text-brand-blue-dark">Acción #42: El Análisis de los "Puntos de Dolor" Silenciosos.</span>
                No te limites a lo que la gente dice que quiere. Aprende a leer entre líneas en foros y comentarios para descubrir qué es lo que realmente les quita el sueño. Esa es la clave para una recomendación irresistible.
              </li>
              <li className="bg-white p-6 rounded-xl border-l-4 border-brand-orange shadow-sm">
                <span className="font-bold block mb-2 text-brand-blue-dark">Acción #157: La Técnica de la "Reseña Inversa".</span>
                En lugar de solo alabar un producto, empieza por sus defectos o para quién NO es adecuado. Esto aumenta tu credibilidad de forma instantánea y filtra a los clientes que no quedarán satisfechos, protegiendo tu reputación.
              </li>
              <li className="bg-white p-6 rounded-xl border-l-4 border-brand-orange shadow-sm">
                <span className="font-bold block mb-2 text-brand-blue-dark">Acción #289: El Sistema de "Reactivación de Audiencia Dormida".</span>
                Aprende cómo volver a conectar con esos suscriptores que llevan meses sin abrir tus correos, utilizando una secuencia de tres mensajes basados en la curiosidad y el valor puro.
              </li>
            </ul>

            <h2 className="text-3xl font-serif text-brand-blue-dark mt-16 mb-8">
              La Paradoja de la Autoridad: Por qué ser un experto no es suficiente
            </h2>

            <p>
              Hay muchas personas con un conocimiento inmenso que no logran generar ni un dólar en la red. ¿Por qué? Porque les falta el puente entre el conocimiento y la confianza. La autoridad no se otorga, se demuestra.
            </p>

            <p>
              En el capítulo 3, desglosamos cómo construir ese puente. No necesitas ser el mayor experto del mundo en tu tema; solo necesitas estar un par de pasos por delante de tu audiencia y tener la capacidad de comunicar tus aprendizajes de forma clara y honesta.
            </p>

            <p>
              Te enseñaré a documentar tu proceso, a compartir tus fracasos con la misma naturalidad que tus éxitos y a construir una marca que se sienta cercana pero profesional. Esa es la verdadera autoridad en el siglo XXI.
            </p>

            <h2 className="text-3xl font-serif text-brand-blue-dark mt-16 mb-8">
              La Ética como Ventaja Competitiva en el Mercado Hispano
            </h2>

            <p>
              El mercado de habla hispana tiene sus propias particularidades. Somos, por naturaleza, más escépticos ante las promesas vacías y valoramos enormemente el trato personal y la calidez. En este contexto, la ética no es solo una elección moral; es la estrategia de marketing más inteligente que puedes adoptar.
            </p>

            <p>
              Mientras que en otros mercados se premia la eficiencia algorítmica, en el nuestro se premia la <strong>lealtad</strong>. Cuando un cliente hispano confía en ti, se convierte en tu mejor embajador. Te recomienda a sus amigos, a su familia y en sus redes sociales.
            </p>

            <p>
              Este libro te enseña a cultivar esa lealtad. Aprenderás a comunicarte de una manera que resuene con nuestra cultura: con respeto, con transparencia y con un deseo genuino de ver prosperar al otro. Descubrirás que, al poner los intereses de tu audiencia por delante de los tuyos, tus propios intereses se ven recompensados de manera exponencial.
            </p>

            <h2 className="text-3xl font-serif text-brand-blue-dark mt-16 mb-8">
              El Poder de la Narrativa Personal: Tu historia es tu activo
            </h2>

            <p>
              Muchos afiliados cometen el error de intentar parecer corporaciones gigantes. Utilizan el "nosotros" cuando son solo ellos frente a una computadora. En este libro, te animo a hacer lo contrario: abraza tu individualidad.
            </p>

            <p>
              Tu historia personal —tus luchas, tus dudas y cómo las superaste— es lo que te hace único. Es lo que nadie puede copiar. Te enseñaré a integrar tu narrativa personal en tus recomendaciones de productos de una manera que se sienta natural y poderosa.
            </p>

            <p>
              Aprenderás a utilizar el "Círculo de la Empatía" para conectar con los problemas de tu audiencia y mostrarles cómo las soluciones que recomiendas han impactado tu propia vida o la de otros que conoces. Esta es la forma más efectiva de vender sin necesidad de recurrir a la presión ni a la exageración.
            </p>

            <h2 className="text-3xl font-serif text-brand-blue-dark mt-16 mb-8">
              Hacia un Futuro de Emprendimiento Consciente
            </h2>

            <p>
              Mi visión con este libro va más allá de ayudarte a ganar unas comisiones. Mi deseo es contribuir a la creación de una nueva generación de emprendedores digitales conscientes. Personas que entiendan que el éxito financiero y la integridad personal no solo son compatibles, sino que son interdependientes.
            </p>

            <p>
              Al adquirir este libro, te unes a un movimiento de personas que están cambiando las reglas del juego. Personas que creen que la red puede ser un lugar de intercambio de valor real, de aprendizaje mutuo y de prosperidad compartida.
            </p>

            <p>
              Estoy emocionado de acompañarte en este viaje. El camino no siempre será fácil, pero te aseguro que será inmensamente gratificante. Cada paso que des siguiendo este sistema te acercará no solo a tus metas económicas, sino a la satisfacción de estar construyendo algo con significado.
            </p>

            <h2 className="text-3xl font-serif text-brand-blue-dark mt-24 mb-8">
              Lo que distingue a esta obra de cualquier otra
            </h2>

            <p>
              Es probable que te estés preguntando: "Francisco, todo esto suena muy bien... pero ¿qué hace que tu libro sea realmente diferente de los cientos que ya existen?".
            </p>

            <p>
              Es una pregunta excelente y merece una respuesta clara. La mayoría de las publicaciones sobre este tema son meras colecciones de tácticas descontextualizadas. Te ofrecen listas de trucos que funcionan hoy, pero que dejan de ser útiles en cuanto un buscador actualiza su algoritmo. Te prometen atajos que, a menudo, solo conducen a callejones sin salida. Te venden sueños que carecen de cimientos sólidos.
            </p>

            <p className="font-semibold text-brand-blue-dark">
              Este libro no es un catálogo de trucos. Es un sistema arquitectónico.
            </p>

            <p>
              Nace de la profunda frustración de ver a miles de emprendedores atrapados en el mismo ciclo improductivo: consumir información sin ejecutar, probar estrategias sin medir resultados y esperar un éxito que nunca llega. Por eso, en lugar de fragmentos aislados, te entrego una estructura completa. Un recorrido progresivo que conecta cada pilar fundamental en una secuencia lógica, coherente y, sobre todo, replicable.
            </p>

            <p>
              Lo que realmente marca la diferencia es que no solo te indico QUÉ hacer, sino que te explico POR QUÉ funciona y CÓMO integrarlo en tu estrategia global. Y para asegurarme de que no te pierdas, te entrego esa lista de trescientas acciones concretas para que puedas avanzar con paso firme.
            </p>

            <div className="my-24 bg-brand-blue-dark text-white p-12 rounded-3xl relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl font-serif mb-8 text-center">¿A quién va dirigido este conocimiento?</h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="text-brand-orange" /> Esto es para ti si:
                    </h4>
                    <ul className="space-y-3 opacity-90">
                      <li>• Eres principiante y deseas evitar errores costosos.</li>
                      <li>• Generas tráfico pero no logras conversiones reales.</li>
                      <li>• Eres creador de contenido pero no tienes autoridad.</li>
                      <li>• Buscas un modelo de ingresos ético y sostenible.</li>
                      <li>• Valoras la honestidad por encima del beneficio rápido.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <XCircle className="text-red-400" /> Esto NO es para ti si:
                    </h4>
                    <ul className="space-y-3 opacity-90">
                      <li>• Buscas hacerte rico en una semana sin trabajar.</li>
                      <li>• Crees que engañar es una estrategia válida.</li>
                      <li>• No estás dispuesto a aprender ni a mejorar.</li>
                      <li>• Prefieres los atajos oscuros a los caminos sólidos.</li>
                      <li>• Buscas resultados mágicos sin inversión de tiempo.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            </div>

            <h2 className="text-3xl font-serif text-brand-blue-dark mt-16 mb-8">
              Garantía Incondicional de Treinta Días
            </h2>

            <p>
              Soy plenamente consciente de que estás invirtiendo tu dinero y, lo que es más valioso, tu tiempo. También sé que el entorno digital está saturado de productos mediocres que prometen el cielo y la tierra. Por ello, quiero eliminar cualquier sombra de riesgo para ti.
            </p>

            <div className="bg-stone-100 border-2 border-dashed border-brand-blue-dark/20 p-8 rounded-2xl my-12 flex flex-col md:flex-row items-center gap-8">
              <ShieldCheck size={80} className="text-brand-blue-dark shrink-0" />
              <div>
                <p className="text-lg font-medium mb-2">Mi compromiso personal contigo:</p>
                <p>
                  Si adquieres <strong>"Tips de Marketing para Afiliados"</strong> y en los próximos treinta días sientes que no has obtenido el valor esperado, o si simplemente consideras que no es para ti, solo tienes que enviarme un mensaje. Te devolveré el importe íntegro de $9,99 sin preguntas, sin condiciones y sin complicaciones. Puedes incluso quedarte con el libro. No deseo tu dinero si no estás plenamente satisfecho con tu inversión.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif text-brand-blue-dark mt-16 mb-8">
              Un pequeño favor antes de que tomes tu decisión
            </h2>

            <p>
              He escrito esta obra con la misma honestidad y rigor con la que me gustaría que me hablaran a mí. No pretendo poseer la verdad absoluta, pero sí tengo las preguntas correctas, los marcos estratégicos y las herramientas prácticas que he refinado durante años de aciertos y desaciertos.
            </p>

            <p>
              Mi único propósito es que tú seas capaz de construir tu propio camino. Porque el éxito en este ámbito no consiste en imitar a otros de forma ciega, sino en descubrir tu propia voz, identificar tu nicho ideal y ejecutar tu sistema único con disciplina inquebrantable.
            </p>

            <h2 className="text-3xl font-serif text-brand-blue-dark mt-16 mb-8">
              ¿Estás listo para abandonar la improvisación?
            </h2>

            <p>
              Llevo años observando a emprendedores con gran potencial atrapados en un círculo vicioso: leen un artículo, prueban una táctica aislada, no obtienen resultados inmediatos, se desmotivan y buscan la siguiente "novedad". Este libro es la salida de ese laberinto.
            </p>

            <p>
              Porque aquí no te entrego una táctica pasajera; te entrego un sistema robusto. No te prometo resultados en siete días; te doy las herramientas para construir un negocio que prospere durante los próximos siete años.
            </p>

            <div id="comprar" className="my-24 text-center bg-white border-2 border-brand-blue-dark p-12 rounded-3xl shadow-2xl relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-orange text-white px-8 py-2 rounded-full font-bold uppercase tracking-widest text-sm">
                Oferta de Lanzamiento
              </div>
              <h3 className="text-4xl font-serif text-brand-blue-dark mb-4">Tips de Marketing para Afiliados</h3>
              <p className="text-slate-500 mb-8">Estrategias éticas, técnicas y sostenibles para construir autoridad.</p>
              
              <div className="text-6xl font-bold text-slate-900 mb-8">
                $9,99
              </div>

              <p className="text-sm text-slate-500 mb-12 max-w-md mx-auto">
                Pago único. Acceso inmediato. Formato digital compatible con todos tus dispositivos.
              </p>

              {/* Enlace de pago principal de ClickBank (Oculto al pasar el ratón) */}
              <form 
                action="https://fcofrancis.pay.clickbank.net/?cbitems=7" 
                method="GET" 
                target="_blank" 
                className="inline-block w-full md:w-auto"
              >
                <button 
                  type="submit"
                  className="w-full md:w-auto bg-brand-orange hover:bg-brand-orange-dark text-white text-xl font-bold px-12 py-5 rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-brand-orange/30 flex items-center justify-center gap-3 mx-auto cursor-pointer"
                >
                  ¡Quiero mi copia ahora! <ArrowRight />
                </button>
              </form>

              <div className="mt-8 flex items-center justify-center gap-6 text-slate-400">
                <div className="flex items-center gap-1 text-xs uppercase tracking-tighter font-bold">
                  <Lock size={14} /> Pago Seguro
                </div>
                <div className="flex items-center gap-1 text-xs uppercase tracking-tighter font-bold">
                  <Clock size={14} /> Acceso Instantáneo
                </div>
                <div className="flex items-center gap-1 text-xs uppercase tracking-tighter font-bold">
                  <ShieldCheck size={14} /> Garantía 30 Días
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-serif text-brand-blue-dark mt-24 mb-12 text-center">
              Lo que dicen quienes ya han transformado su negocio
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-24">
              <div className="bg-stone-50 p-8 rounded-2xl border border-slate-100 italic text-slate-700 relative">
                <Quote className="text-brand-orange/20 absolute top-4 left-4" size={40} />
                <p className="relative z-10 mb-6">
                  "Llevaba dos años sin resultados consistentes. Había gastado una pequeña fortuna en cursos. Este libro me hizo comprender que no necesitaba más trucos, necesitaba un sistema sólido. En tres meses he multiplicado mis ingresos de forma notable."
                </p>
                <p className="font-bold text-brand-blue-dark not-italic">— Carlos M., Madrid</p>
              </div>
              <div className="bg-stone-50 p-8 rounded-2xl border border-slate-100 italic text-slate-700 relative">
                <Quote className="text-brand-orange/20 absolute top-4 left-4" size={40} />
                <p className="relative z-10 mb-6">
                  "Lo que más valoro es el enfoque ético. Siempre me sentí incómoda con las tácticas agresivas. Francisco me enseñó que se puede prosperar ayudando de verdad a las personas. Ahora tengo una comunidad fiel y estable."
                </p>
                <p className="font-bold text-brand-blue-dark not-italic">— Laura G., Ciudad de México</p>
              </div>
              <div className="bg-stone-50 p-8 rounded-2xl border border-slate-100 italic text-slate-700 relative">
                <Quote className="text-brand-orange/20 absolute top-4 left-4" size={40} />
                <p className="relative z-10 mb-6">
                  "La lista de verificación del capítulo trece es, por sí sola, un tesoro. Tener claridad sobre qué hacer cada día me ha dado una paz mental que no tenía hace años. Por fin siento que tengo el control de mi negocio."
                </p>
                <p className="font-bold text-brand-blue-dark not-italic">— Javier R., Barcelona</p>
              </div>
            </div>

            <h2 className="text-3xl font-serif text-brand-blue-dark mt-16 mb-8">
              Preguntas Frecuentes
            </h2>

            <div className="space-y-8 mb-24">
              <div>
                <h4 className="font-bold text-lg mb-2">¿Necesito experiencia previa en el sector?</h4>
                <p className="text-slate-600">No es necesario. El libro está estructurado para llevarte de la mano desde los conceptos más básicos hasta las estrategias más avanzadas. Si ya tienes experiencia, te servirá para profesionalizar tus procesos y descubrir nuevas oportunidades.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">¿Funciona para cualquier nicho de mercado?</h4>
                <p className="text-slate-600">Absolutamente. Los principios de autoridad, confianza y valor humano son universales. Ya sea que te enfoques en salud, tecnología, finanzas o cualquier otro sector, el sistema es plenamente adaptable.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">¿Cuánto tiempo debo dedicarle al día?</h4>
                <p className="text-slate-600">Eso depende de tus objetivos y de tu disponibilidad. El sistema está diseñado para ser flexible. Puedes avanzar dedicando una hora diaria o concentrar tu trabajo en los fines de semana. Lo vital es la constancia en la ejecución.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">¿Qué ocurre si no tengo una audiencia previa?</h4>
                <p className="text-slate-600">Uno de los pilares del libro es enseñarte precisamente a construir esa audiencia desde el absoluto cero, basándote en la aportación de valor y la construcción de autoridad genuina.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">¿El libro se actualiza con los cambios del mercado?</h4>
                <p className="text-slate-600">Aunque el entorno digital cambia, los principios psicológicos y estratégicos que enseño son atemporales. Además, el capítulo 11 está dedicado específicamente a enseñarte cómo adaptarte a cualquier cambio futuro por tu cuenta.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">¿Recibiré soporte si tengo dudas?</h4>
                <p className="text-slate-600">Dentro del libro encontrarás información sobre nuestra comunidad exclusiva donde compartimos experiencias y resolvemos dudas comunes entre los lectores que están aplicando el sistema.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">¿En qué formato recibiré el libro?</h4>
                <p className="text-slate-600">Recibirás un archivo digital en formato PDF de alta calidad, optimizado para ser leído en cualquier dispositivo (computadora, tableta o teléfono inteligente) e incluso para ser impreso si así lo prefieres.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">¿Es seguro realizar el pago?</h4>
                <p className="text-slate-600">Totalmente. Utilizamos plataformas de pago líderes en la industria que garantizan la seguridad de tus datos mediante cifrado avanzado. Tu información financiera nunca es compartida con nosotros.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">¿Cómo funciona la garantía de devolución?</h4>
                <p className="text-slate-600">Es muy sencillo. Tienes 30 días completos para leer y aplicar el contenido. Si por cualquier motivo sientes que no es para ti, nos escribes un correo y te devolvemos el 100% de tu dinero. Sin preguntas incómodas.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">¿Puedo aplicar esto si vivo fuera de España o Estados Unidos?</h4>
                <p className="text-slate-600">Sí, este sistema es global. El marketing de afiliados no tiene fronteras geográficas. Puedes aplicarlo desde cualquier país del mundo siempre que tengas una conexión a la red.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">¿Necesito invertir mucho dinero en herramientas adicionales?</h4>
                <p className="text-slate-600">En el libro priorizo el uso de herramientas gratuitas o de muy bajo coste, especialmente para quienes están comenzando. Te enseño a ser eficiente con tus recursos antes de escalar.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">¿Este libro me enseñará a crear mis propios productos?</h4>
                <p className="text-slate-600">El enfoque principal es el marketing de afiliados (recomendar productos de otros). Sin embargo, las bases de autoridad y marca personal que aprenderás son el cimiento perfecto si en el futuro decides crear tus propios servicios o productos.</p>
              </div>

            </div>

            <div className="border-t border-slate-200 pt-16 text-center">
              <p className="text-2xl font-serif italic text-slate-800 mb-8">
                "El año que viene, desearás haber empezado hoy mismo."
              </p>
              <p className="mb-12">
                No permitas que otro año pase viendo cómo otros construyen sus sueños mientras tú sigues atrapado en la indecisión. La inversión es mínima, el riesgo es nulo y la oportunidad es inmensa.
              </p>
              <button 
                type="button"
                onClick={() => document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-brand-blue-dark hover:bg-slate-800 text-white px-12 py-4 rounded-full font-bold transition-all shadow-xl cursor-pointer"
              >
                Comenzar mi transformación por $9,99
              </button>
            </div>

            <footer className="mt-32 pt-16 border-t border-slate-100 text-slate-400 text-sm text-center">
              <p>© {new Date().getFullYear()} Francisco González. Todos los derechos reservados.</p>
              <p className="mt-2">Estrategias éticas para emprendedores digitales comprometidos.</p>
            </footer>
          </div>
        </article>
      </main>
    </div>
  );
}
